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
import { UserInfoController } from "../userInfo.controller";
import { UserInfoService } from "../userInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  businessEmail: "exampleBusinessEmail",
  citizenship: "exampleCitizenship",
  city: "exampleCity",
  country: "exampleCountry",
  employeeNumber: "exampleEmployeeNumber",
  firstName: "exampleFirstName",
  gender: 42,
  id: "exampleId",
  lastName: "exampleLastName",
  managerId: "exampleManagerId",
  martialStatus: 42,
  nationality: "exampleNationality",
  personalEmail: "examplePersonalEmail",
  phone: "examplePhone",
  postcode: "examplePostcode",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  businessEmail: "exampleBusinessEmail",
  citizenship: "exampleCitizenship",
  city: "exampleCity",
  country: "exampleCountry",
  employeeNumber: "exampleEmployeeNumber",
  firstName: "exampleFirstName",
  gender: 42,
  id: "exampleId",
  lastName: "exampleLastName",
  managerId: "exampleManagerId",
  martialStatus: 42,
  nationality: "exampleNationality",
  personalEmail: "examplePersonalEmail",
  phone: "examplePhone",
  postcode: "examplePostcode",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    businessEmail: "exampleBusinessEmail",
    citizenship: "exampleCitizenship",
    city: "exampleCity",
    country: "exampleCountry",
    employeeNumber: "exampleEmployeeNumber",
    firstName: "exampleFirstName",
    gender: 42,
    id: "exampleId",
    lastName: "exampleLastName",
    managerId: "exampleManagerId",
    martialStatus: 42,
    nationality: "exampleNationality",
    personalEmail: "examplePersonalEmail",
    phone: "examplePhone",
    postcode: "examplePostcode",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  businessEmail: "exampleBusinessEmail",
  citizenship: "exampleCitizenship",
  city: "exampleCity",
  country: "exampleCountry",
  employeeNumber: "exampleEmployeeNumber",
  firstName: "exampleFirstName",
  gender: 42,
  id: "exampleId",
  lastName: "exampleLastName",
  managerId: "exampleManagerId",
  martialStatus: 42,
  nationality: "exampleNationality",
  personalEmail: "examplePersonalEmail",
  phone: "examplePhone",
  postcode: "examplePostcode",
};

const service = {
  createUserInfo() {
    return CREATE_RESULT;
  },
  userInfos: () => FIND_MANY_RESULT,
  userInfo: ({ where }: { where: { id: string } }) => {
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

describe("UserInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserInfoService,
          useValue: service,
        },
      ],
      controllers: [UserInfoController],
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

  test("POST /userInfos", async () => {
    await request(app.getHttpServer())
      .post("/userInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /userInfos", async () => {
    await request(app.getHttpServer())
      .get("/userInfos")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /userInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /userInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/userInfos")
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
