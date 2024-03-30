import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyNewService } from "./companyNew.service";
import { CompanyNewGrpcControllerBase } from "./base/companyNew.grpc.controller.base";

@swagger.ApiTags("companyNews")
@common.Controller("companyNews")
export class CompanyNewGrpcController extends CompanyNewGrpcControllerBase {
  constructor(protected readonly service: CompanyNewService) {
    super(service);
  }
}
