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
import { MasterdataTimeOffController } from "../masterdataTimeOff.controller";
import { MasterdataTimeOffService } from "../masterdataTimeOff.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  description: "exampleDescription",
  icon: "exampleIcon",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  totalDays: 42,
};
const CREATE_RESULT = {
  code: "exampleCode",
  description: "exampleDescription",
  icon: "exampleIcon",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  totalDays: 42,
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    description: "exampleDescription",
    icon: "exampleIcon",
    id: "exampleId",
    isActive: "true",
    name: "exampleName",
    totalDays: 42,
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  description: "exampleDescription",
  icon: "exampleIcon",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  totalDays: 42,
};

const service = {
  createMasterdataTimeOff() {
    return CREATE_RESULT;
  },
  masterdataTimeOffs: () => FIND_MANY_RESULT,
  masterdataTimeOff: ({ where }: { where: { id: string } }) => {
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

describe("MasterdataTimeOff", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MasterdataTimeOffService,
          useValue: service,
        },
      ],
      controllers: [MasterdataTimeOffController],
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

  test("POST /masterdataTimeOffs", async () => {
    await request(app.getHttpServer())
      .post("/masterdataTimeOffs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /masterdataTimeOffs", async () => {
    await request(app.getHttpServer())
      .get("/masterdataTimeOffs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /masterdataTimeOffs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/masterdataTimeOffs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /masterdataTimeOffs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/masterdataTimeOffs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /masterdataTimeOffs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/masterdataTimeOffs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/masterdataTimeOffs")
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
