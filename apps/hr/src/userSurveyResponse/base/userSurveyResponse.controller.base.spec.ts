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
import { UserSurveyResponseController } from "../userSurveyResponse.controller";
import { UserSurveyResponseService } from "../userSurveyResponse.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  submittedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  submittedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    submittedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  submittedAt: new Date(),
};

const service = {
  createUserSurveyResponse() {
    return CREATE_RESULT;
  },
  userSurveyResponses: () => FIND_MANY_RESULT,
  userSurveyResponse: ({ where }: { where: { id: string } }) => {
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

describe("UserSurveyResponse", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserSurveyResponseService,
          useValue: service,
        },
      ],
      controllers: [UserSurveyResponseController],
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

  test("POST /userSurveyResponses", async () => {
    await request(app.getHttpServer())
      .post("/userSurveyResponses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        submittedAt: CREATE_RESULT.submittedAt.toISOString(),
      });
  });

  test("GET /userSurveyResponses", async () => {
    await request(app.getHttpServer())
      .get("/userSurveyResponses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          submittedAt: FIND_MANY_RESULT[0].submittedAt.toISOString(),
        },
      ]);
  });

  test("GET /userSurveyResponses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userSurveyResponses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userSurveyResponses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userSurveyResponses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        submittedAt: FIND_ONE_RESULT.submittedAt.toISOString(),
      });
  });

  test("POST /userSurveyResponses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userSurveyResponses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        submittedAt: CREATE_RESULT.submittedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userSurveyResponses")
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
