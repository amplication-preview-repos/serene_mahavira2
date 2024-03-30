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
import { CompanyNewController } from "../companyNew.controller";
import { CompanyNewService } from "../companyNew.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  content: "exampleContent",
  id: "exampleId",
  imagePath: "exampleImagePath",
  publishedDate: new Date(),
  status: 42,
  tags: "exampleTags",
  title: "exampleTitle",
};
const CREATE_RESULT = {
  content: "exampleContent",
  id: "exampleId",
  imagePath: "exampleImagePath",
  publishedDate: new Date(),
  status: 42,
  tags: "exampleTags",
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    content: "exampleContent",
    id: "exampleId",
    imagePath: "exampleImagePath",
    publishedDate: new Date(),
    status: 42,
    tags: "exampleTags",
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  content: "exampleContent",
  id: "exampleId",
  imagePath: "exampleImagePath",
  publishedDate: new Date(),
  status: 42,
  tags: "exampleTags",
  title: "exampleTitle",
};

const service = {
  createCompanyNew() {
    return CREATE_RESULT;
  },
  companyNews: () => FIND_MANY_RESULT,
  companyNew: ({ where }: { where: { id: string } }) => {
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

describe("CompanyNew", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyNewService,
          useValue: service,
        },
      ],
      controllers: [CompanyNewController],
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

  test("POST /companyNews", async () => {
    await request(app.getHttpServer())
      .post("/companyNews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        publishedDate: CREATE_RESULT.publishedDate.toISOString(),
      });
  });

  test("GET /companyNews", async () => {
    await request(app.getHttpServer())
      .get("/companyNews")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          publishedDate: FIND_MANY_RESULT[0].publishedDate.toISOString(),
        },
      ]);
  });

  test("GET /companyNews/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyNews"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companyNews/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyNews"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        publishedDate: FIND_ONE_RESULT.publishedDate.toISOString(),
      });
  });

  test("POST /companyNews existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/companyNews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        publishedDate: CREATE_RESULT.publishedDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/companyNews")
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
