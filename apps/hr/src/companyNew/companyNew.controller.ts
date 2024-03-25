import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyNewService } from "./companyNew.service";
import { CompanyNewControllerBase } from "./base/companyNew.controller.base";

@swagger.ApiTags("companyNews")
@common.Controller("companyNews")
export class CompanyNewController extends CompanyNewControllerBase {
  constructor(protected readonly service: CompanyNewService) {
    super(service);
  }
}
