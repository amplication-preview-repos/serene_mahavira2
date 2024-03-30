import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyStructureService } from "./companyStructure.service";
import { CompanyStructureGrpcControllerBase } from "./base/companyStructure.grpc.controller.base";

@swagger.ApiTags("companyStructures")
@common.Controller("companyStructures")
export class CompanyStructureGrpcController extends CompanyStructureGrpcControllerBase {
  constructor(protected readonly service: CompanyStructureService) {
    super(service);
  }
}
