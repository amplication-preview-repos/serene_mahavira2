import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyJobApplyService } from "./companyJobApply.service";
import { CompanyJobApplyGrpcControllerBase } from "./base/companyJobApply.grpc.controller.base";

@swagger.ApiTags("companyJobApplies")
@common.Controller("companyJobApplies")
export class CompanyJobApplyGrpcController extends CompanyJobApplyGrpcControllerBase {
  constructor(protected readonly service: CompanyJobApplyService) {
    super(service);
  }
}
