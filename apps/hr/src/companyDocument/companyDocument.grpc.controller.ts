import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyDocumentService } from "./companyDocument.service";
import { CompanyDocumentGrpcControllerBase } from "./base/companyDocument.grpc.controller.base";

@swagger.ApiTags("companyDocuments")
@common.Controller("companyDocuments")
export class CompanyDocumentGrpcController extends CompanyDocumentGrpcControllerBase {
  constructor(protected readonly service: CompanyDocumentService) {
    super(service);
  }
}
