import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyJobApplyService } from "./companyJobApply.service";
import { CompanyJobApplyControllerBase } from "./base/companyJobApply.controller.base";

@swagger.ApiTags("companyJobApplies")
@common.Controller("companyJobApplies")
export class CompanyJobApplyController extends CompanyJobApplyControllerBase {
  constructor(protected readonly service: CompanyJobApplyService) {
    super(service);
  }
}
