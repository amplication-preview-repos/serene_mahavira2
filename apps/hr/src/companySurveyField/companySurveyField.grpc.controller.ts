import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanySurveyFieldService } from "./companySurveyField.service";
import { CompanySurveyFieldGrpcControllerBase } from "./base/companySurveyField.grpc.controller.base";

@swagger.ApiTags("companySurveyFields")
@common.Controller("companySurveyFields")
export class CompanySurveyFieldGrpcController extends CompanySurveyFieldGrpcControllerBase {
  constructor(protected readonly service: CompanySurveyFieldService) {
    super(service);
  }
}
