import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyCalendarService } from "./companyCalendar.service";
import { CompanyCalendarControllerBase } from "./base/companyCalendar.controller.base";

@swagger.ApiTags("companyCalendars")
@common.Controller("companyCalendars")
export class CompanyCalendarController extends CompanyCalendarControllerBase {
  constructor(protected readonly service: CompanyCalendarService) {
    super(service);
  }
}
