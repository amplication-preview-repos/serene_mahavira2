import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyCalendarService } from "./companyCalendar.service";
import { CompanyCalendarGrpcControllerBase } from "./base/companyCalendar.grpc.controller.base";

@swagger.ApiTags("companyCalendars")
@common.Controller("companyCalendars")
export class CompanyCalendarGrpcController extends CompanyCalendarGrpcControllerBase {
  constructor(protected readonly service: CompanyCalendarService) {
    super(service);
  }
}
