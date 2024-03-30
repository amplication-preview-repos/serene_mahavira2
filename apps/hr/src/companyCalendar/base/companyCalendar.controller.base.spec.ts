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
import { CompanyCalendarController } from "../companyCalendar.controller";
import { CompanyCalendarService } from "../companyCalendar.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  calendarType: 42,
  duration: 42,
  endDate: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  name: "exampleName",
  note: "exampleNote",
  startDate: new Date(),
};
const CREATE_RESULT = {
  calendarType: 42,
  duration: 42,
  endDate: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  name: "exampleName",
  note: "exampleNote",
  startDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    calendarType: 42,
    duration: 42,
    endDate: new Date(),
    id: "exampleId",
    location: "exampleLocation",
    name: "exampleName",
    note: "exampleNote",
    startDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  calendarType: 42,
  duration: 42,
  endDate: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  name: "exampleName",
  note: "exampleNote",
  startDate: new Date(),
};

const service = {
  createCompanyCalendar() {
    return CREATE_RESULT;
  },
  companyCalendars: () => FIND_MANY_RESULT,
  companyCalendar: ({ where }: { where: { id: string } }) => {
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

describe("CompanyCalendar", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyCalendarService,
          useValue: service,
        },
      ],
      controllers: [CompanyCalendarController],
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

  test("POST /companyCalendars", async () => {
    await request(app.getHttpServer())
      .post("/companyCalendars")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
      });
  });

  test("GET /companyCalendars", async () => {
    await request(app.getHttpServer())
      .get("/companyCalendars")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
        },
      ]);
  });

  test("GET /companyCalendars/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyCalendars"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companyCalendars/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companyCalendars"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
      });
  });

  test("POST /companyCalendars existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/companyCalendars")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/companyCalendars")
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
