import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanySurveyService } from "./companySurvey.service";
import { CompanySurveyControllerBase } from "./base/companySurvey.controller.base";

@swagger.ApiTags("companySurveys")
@common.Controller("companySurveys")
export class CompanySurveyController extends CompanySurveyControllerBase {
  constructor(protected readonly service: CompanySurveyService) {
    super(service);
  }
}
