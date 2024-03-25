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
import { CompanyStructureController } from "../companyStructure.controller";
import { CompanyStructureService } from "../companyStructure.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  description: "exampleDescription",
  id: "exampleId",
  name: "exampleName",
  parentId: "exampleParentId",
};
const CREATE_RESULT = {
  code: "exampleCode",
  description: "exampleDescription",
  id: "exampleId",
  name: "exampleName",
  parentId: "exampleParentId",
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    description: "exampleDescription",
    id: "exampleId",
    name: "exampleName",
    parentId: "exampleParentId",
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  description: "exampleDescription",
  id: "exampleId",
  name: "exampleName",
  parentId: "exampleParentId",
};

const service = {
  createCompanyStructure() {
    return CREATE_RESULT;
  },
  companyStructures: () => FIND_MANY_RESULT,
  companyStructure: ({ where }: { where: { id: string } }) => {
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

describe("CompanyStructure", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyStructureService,
          useValue: service,
        },
      ],
      controllers: [CompanyStructureController],
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

  test("POST /companyStructures", async () => {
    await request(app.getHttpServer())
      .post("/companyStructures")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /companyStructures", async () => {
    await request(app.getHttpServer())
      .get("/companyStructures")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /companyStructures/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyStructures"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companyStructures/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyStructures"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /companyStructures existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/companyStructures")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/companyStructures")
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
