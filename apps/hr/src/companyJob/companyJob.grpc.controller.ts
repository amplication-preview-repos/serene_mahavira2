import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyJobService } from "./companyJob.service";
import { CompanyJobGrpcControllerBase } from "./base/companyJob.grpc.controller.base";

@swagger.ApiTags("companyJobs")
@common.Controller("companyJobs")
export class CompanyJobGrpcController extends CompanyJobGrpcControllerBase {
  constructor(protected readonly service: CompanyJobService) {
    super(service);
  }
}
