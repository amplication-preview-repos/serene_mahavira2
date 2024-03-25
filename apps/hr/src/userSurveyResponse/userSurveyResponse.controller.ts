import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSurveyResponseService } from "./userSurveyResponse.service";
import { UserSurveyResponseControllerBase } from "./base/userSurveyResponse.controller.base";

@swagger.ApiTags("userSurveyResponses")
@common.Controller("userSurveyResponses")
export class UserSurveyResponseController extends UserSurveyResponseControllerBase {
  constructor(protected readonly service: UserSurveyResponseService) {
    super(service);
  }
}
