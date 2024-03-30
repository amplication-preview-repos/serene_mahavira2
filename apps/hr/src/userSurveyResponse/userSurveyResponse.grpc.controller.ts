import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSurveyResponseService } from "./userSurveyResponse.service";
import { UserSurveyResponseGrpcControllerBase } from "./base/userSurveyResponse.grpc.controller.base";

@swagger.ApiTags("userSurveyResponses")
@common.Controller("userSurveyResponses")
export class UserSurveyResponseGrpcController extends UserSurveyResponseGrpcControllerBase {
  constructor(protected readonly service: UserSurveyResponseService) {
    super(service);
  }
}
