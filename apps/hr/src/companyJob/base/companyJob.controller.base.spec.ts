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
import { CompanyJobController } from "../companyJob.controller";
import { CompanyJobService } from "../companyJob.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contractTypeId: "exampleContractTypeId",
  department: "exampleDepartment",
  descriptionJob: "exampleDescriptionJob",
  id: "exampleId",
  location: "exampleLocation",
  stages: "exampleStages",
  title: "exampleTitle",
};
const CREATE_RESULT = {
  contractTypeId: "exampleContractTypeId",
  department: "exampleDepartment",
  descriptionJob: "exampleDescriptionJob",
  id: "exampleId",
  location: "exampleLocation",
  stages: "exampleStages",
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    contractTypeId: "exampleContractTypeId",
    department: "exampleDepartment",
    descriptionJob: "exampleDescriptionJob",
    id: "exampleId",
    location: "exampleLocation",
    stages: "exampleStages",
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  contractTypeId: "exampleContractTypeId",
  department: "exampleDepartment",
  descriptionJob: "exampleDescriptionJob",
  id: "exampleId",
  location: "exampleLocation",
  stages: "exampleStages",
  title: "exampleTitle",
};

const service = {
  createCompanyJob() {
    return CREATE_RESULT;
  },
  companyJobs: () => FIND_MANY_RESULT,
  companyJob: ({ where }: { where: { id: string } }) => {
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

describe("CompanyJob", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyJobService,
          useValue: service,
        },
      ],
      controllers: [CompanyJobController],
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

  test("POST /companyJobs", async () => {
    await request(app.getHttpServer())
      .post("/companyJobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /companyJobs", async () => {
    await request(app.getHttpServer())
      .get("/companyJobs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /companyJobs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyJobs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companyJobs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyJobs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /companyJobs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/companyJobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/companyJobs")
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
