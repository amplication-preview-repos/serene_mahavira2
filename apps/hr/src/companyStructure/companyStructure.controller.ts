import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyStructureService } from "./companyStructure.service";
import { CompanyStructureControllerBase } from "./base/companyStructure.controller.base";

@swagger.ApiTags("companyStructures")
@common.Controller("companyStructures")
export class CompanyStructureController extends CompanyStructureControllerBase {
  constructor(protected readonly service: CompanyStructureService) {
    super(service);
  }
}
