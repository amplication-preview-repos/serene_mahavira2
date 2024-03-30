import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanySurveyService } from "./companySurvey.service";
import { CompanySurveyGrpcControllerBase } from "./base/companySurvey.grpc.controller.base";

@swagger.ApiTags("companySurveys")
@common.Controller("companySurveys")
export class CompanySurveyGrpcController extends CompanySurveyGrpcControllerBase {
  constructor(protected readonly service: CompanySurveyService) {
    super(service);
  }
}
