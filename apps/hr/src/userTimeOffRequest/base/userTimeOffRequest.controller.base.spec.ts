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
import { UserTimeOffRequestController } from "../userTimeOffRequest.controller";
import { UserTimeOffRequestService } from "../userTimeOffRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  note: "exampleNote",
  numDays: 42,
  periodEnd: new Date(),
  periodStart: new Date(),
  status: 42,
};
const CREATE_RESULT = {
  id: "exampleId",
  note: "exampleNote",
  numDays: 42,
  periodEnd: new Date(),
  periodStart: new Date(),
  status: 42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    note: "exampleNote",
    numDays: 42,
    periodEnd: new Date(),
    periodStart: new Date(),
    status: 42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  note: "exampleNote",
  numDays: 42,
  periodEnd: new Date(),
  periodStart: new Date(),
  status: 42,
};

const service = {
  createUserTimeOffRequest() {
    return CREATE_RESULT;
  },
  userTimeOffRequests: () => FIND_MANY_RESULT,
  userTimeOffRequest: ({ where }: { where: { id: string } }) => {
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

describe("UserTimeOffRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserTimeOffRequestService,
          useValue: service,
        },
      ],
      controllers: [UserTimeOffRequestController],
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

  test("POST /userTimeOffRequests", async () => {
    await request(app.getHttpServer())
      .post("/userTimeOffRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        periodEnd: CREATE_RESULT.periodEnd.toISOString(),
        periodStart: CREATE_RESULT.periodStart.toISOString(),
      });
  });

  test("GET /userTimeOffRequests", async () => {
    await request(app.getHttpServer())
      .get("/userTimeOffRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          periodEnd: FIND_MANY_RESULT[0].periodEnd.toISOString(),
          periodStart: FIND_MANY_RESULT[0].periodStart.toISOString(),
        },
      ]);
  });

  test("GET /userTimeOffRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userTimeOffRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userTimeOffRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userTimeOffRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        periodEnd: FIND_ONE_RESULT.periodEnd.toISOString(),
        periodStart: FIND_ONE_RESULT.periodStart.toISOString(),
      });
  });

  test("POST /userTimeOffRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userTimeOffRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        periodEnd: CREATE_RESULT.periodEnd.toISOString(),
        periodStart: CREATE_RESULT.periodStart.toISOString(),
      })
      .then(function () {
        agent
          .post("/userTimeOffRequests")
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
