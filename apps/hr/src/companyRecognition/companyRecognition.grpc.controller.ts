import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyRecognitionService } from "./companyRecognition.service";
import { CompanyRecognitionGrpcControllerBase } from "./base/companyRecognition.grpc.controller.base";

@swagger.ApiTags("companyRecognitions")
@common.Controller("companyRecognitions")
export class CompanyRecognitionGrpcController extends CompanyRecognitionGrpcControllerBase {
  constructor(protected readonly service: CompanyRecognitionService) {
    super(service);
  }
}
