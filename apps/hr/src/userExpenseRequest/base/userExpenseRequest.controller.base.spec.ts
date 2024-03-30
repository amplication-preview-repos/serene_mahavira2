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
import { UserExpenseRequestController } from "../userExpenseRequest.controller";
import { UserExpenseRequestService } from "../userExpenseRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  approvedAt: new Date(),
  category: "exampleCategory",
  id: "exampleId",
  note: "exampleNote",
  purchaseDate: new Date(),
  requestedAt: new Date(),
  status: 42,
  taxAmount: 42.42,
  title: "exampleTitle",
  totalAmount: 42.42,
};
const CREATE_RESULT = {
  approvedAt: new Date(),
  category: "exampleCategory",
  id: "exampleId",
  note: "exampleNote",
  purchaseDate: new Date(),
  requestedAt: new Date(),
  status: 42,
  taxAmount: 42.42,
  title: "exampleTitle",
  totalAmount: 42.42,
};
const FIND_MANY_RESULT = [
  {
    approvedAt: new Date(),
    category: "exampleCategory",
    id: "exampleId",
    note: "exampleNote",
    purchaseDate: new Date(),
    requestedAt: new Date(),
    status: 42,
    taxAmount: 42.42,
    title: "exampleTitle",
    totalAmount: 42.42,
  },
];
const FIND_ONE_RESULT = {
  approvedAt: new Date(),
  category: "exampleCategory",
  id: "exampleId",
  note: "exampleNote",
  purchaseDate: new Date(),
  requestedAt: new Date(),
  status: 42,
  taxAmount: 42.42,
  title: "exampleTitle",
  totalAmount: 42.42,
};

const service = {
  createUserExpenseRequest() {
    return CREATE_RESULT;
  },
  userExpenseRequests: () => FIND_MANY_RESULT,
  userExpenseRequest: ({ where }: { where: { id: string } }) => {
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

describe("UserExpenseRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserExpenseRequestService,
          useValue: service,
        },
      ],
      controllers: [UserExpenseRequestController],
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

  test("POST /userExpenseRequests", async () => {
    await request(app.getHttpServer())
      .post("/userExpenseRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvedAt: CREATE_RESULT.approvedAt.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
      });
  });

  test("GET /userExpenseRequests", async () => {
    await request(app.getHttpServer())
      .get("/userExpenseRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          approvedAt: FIND_MANY_RESULT[0].approvedAt.toISOString(),
          purchaseDate: FIND_MANY_RESULT[0].purchaseDate.toISOString(),
          requestedAt: FIND_MANY_RESULT[0].requestedAt.toISOString(),
        },
      ]);
  });

  test("GET /userExpenseRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userExpenseRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userExpenseRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userExpenseRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        approvedAt: FIND_ONE_RESULT.approvedAt.toISOString(),
        purchaseDate: FIND_ONE_RESULT.purchaseDate.toISOString(),
        requestedAt: FIND_ONE_RESULT.requestedAt.toISOString(),
      });
  });

  test("POST /userExpenseRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userExpenseRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvedAt: CREATE_RESULT.approvedAt.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userExpenseRequests")
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
