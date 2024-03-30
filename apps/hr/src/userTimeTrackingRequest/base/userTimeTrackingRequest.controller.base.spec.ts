import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserTimeTrackingRequestController } from "../userTimeTrackingRequest.controller";
import { UserTimeTrackingRequestService } from "../userTimeTrackingRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  approvedAt: new Date(),
  id: "exampleId",
  name: "exampleName",
  requestedAt: new Date(),
  status: 42,
};
const CREATE_RESULT = {
  approvedAt: new Date(),
  id: "exampleId",
  name: "exampleName",
  requestedAt: new Date(),
  status: 42,
};
const FIND_MANY_RESULT = [
  {
    approvedAt: new Date(),
    id: "exampleId",
    name: "exampleName",
    requestedAt: new Date(),
    status: 42,
  },
];
const FIND_ONE_RESULT = {
  approvedAt: new Date(),
  id: "exampleId",
  name: "exampleName",
  requestedAt: new Date(),
  status: 42,
};

const service = {
  createUserTimeTrackingRequest() {
    return CREATE_RESULT;
  },
  userTimeTrackingRequests: () => FIND_MANY_RESULT,
  userTimeTrackingRequest: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UserTimeTrackingRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserTimeTrackingRequestService,
          useValue: service,
        },
      ],
      controllers: [UserTimeTrackingRequestController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userTimeTrackingRequests", async () => {
    await request(app.getHttpServer())
      .post("/userTimeTrackingRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvedAt: CREATE_RESULT.approvedAt.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
      });
  });

  test("GET /userTimeTrackingRequests", async () => {
    await request(app.getHttpServer())
      .get("/userTimeTrackingRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          approvedAt: FIND_MANY_RESULT[0].approvedAt.toISOString(),
          requestedAt: FIND_MANY_RESULT[0].requestedAt.toISOString(),
        },
      ]);
  });

  test("GET /userTimeTrackingRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userTimeTrackingRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userTimeTrackingRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userTimeTrackingRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        approvedAt: FIND_ONE_RESULT.approvedAt.toISOString(),
        requestedAt: FIND_ONE_RESULT.requestedAt.toISOString(),
      });
  });

  test("POST /userTimeTrackingRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userTimeTrackingRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvedAt: CREATE_RESULT.approvedAt.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userTimeTrackingRequests")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
