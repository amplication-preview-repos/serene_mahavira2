import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyJobService } from "./companyJob.service";
import { CompanyJobControllerBase } from "./base/companyJob.controller.base";

@swagger.ApiTags("companyJobs")
@common.Controller("companyJobs")
export class CompanyJobController extends CompanyJobControllerBase {
  constructor(protected readonly service: CompanyJobService) {
    super(service);
  }
}
