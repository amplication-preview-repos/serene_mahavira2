import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanySurveyFieldService } from "./companySurveyField.service";
import { CompanySurveyFieldControllerBase } from "./base/companySurveyField.controller.base";

@swagger.ApiTags("companySurveyFields")
@common.Controller("companySurveyFields")
export class CompanySurveyFieldController extends CompanySurveyFieldControllerBase {
  constructor(protected readonly service: CompanySurveyFieldService) {
    super(service);
  }
}
