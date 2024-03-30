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
import { CompanyDocumentController } from "../companyDocument.controller";
import { CompanyDocumentService } from "../companyDocument.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  description: "exampleDescription",
  fileSize: 42242424,
  fileType: "exampleFileType",
  id: 42242424,
  name: "exampleName",
  path: "examplePath",
  publishedAt: new Date(),
};
const CREATE_RESULT = {
  description: "exampleDescription",
  fileSize: 42242424,
  fileType: "exampleFileType",
  id: 42242424,
  name: "exampleName",
  path: "examplePath",
  publishedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    description: "exampleDescription",
    fileSize: 42242424,
    fileType: "exampleFileType",
    id: 42242424,
    name: "exampleName",
    path: "examplePath",
    publishedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  description: "exampleDescription",
  fileSize: 42242424,
  fileType: "exampleFileType",
  id: 42242424,
  name: "exampleName",
  path: "examplePath",
  publishedAt: new Date(),
};

const service = {
  createCompanyDocument() {
    return CREATE_RESULT;
  },
  companyDocuments: () => FIND_MANY_RESULT,
  companyDocument: ({ where }: { where: { id: string } }) => {
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

describe("CompanyDocument", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyDocumentService,
          useValue: service,
        },
      ],
      controllers: [CompanyDocumentController],
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

  test("POST /companyDocuments", async () => {
    await request(app.getHttpServer())
      .post("/companyDocuments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        publishedAt: CREATE_RESULT.publishedAt.toISOString(),
      });
  });

  test("GET /companyDocuments", async () => {
    await request(app.getHttpServer())
      .get("/companyDocuments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          publishedAt: FIND_MANY_RESULT[0].publishedAt.toISOString(),
        },
      ]);
  });

  test("GET /companyDocuments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyDocuments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companyDocuments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyDocuments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        publishedAt: FIND_ONE_RESULT.publishedAt.toISOString(),
      });
  });

  test("POST /companyDocuments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/companyDocuments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        publishedAt: CREATE_RESULT.publishedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/companyDocuments")
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
