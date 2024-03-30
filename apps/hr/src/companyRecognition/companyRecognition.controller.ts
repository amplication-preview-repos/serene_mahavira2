import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyRecognitionService } from "./companyRecognition.service";
import { CompanyRecognitionControllerBase } from "./base/companyRecognition.controller.base";

@swagger.ApiTags("companyRecognitions")
@common.Controller("companyRecognitions")
export class CompanyRecognitionController extends CompanyRecognitionControllerBase {
  constructor(protected readonly service: CompanyRecognitionService) {
    super(service);
  }
}
