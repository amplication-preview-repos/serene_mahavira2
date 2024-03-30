import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyDocumentService } from "./companyDocument.service";
import { CompanyDocumentControllerBase } from "./base/companyDocument.controller.base";

@swagger.ApiTags("companyDocuments")
@common.Controller("companyDocuments")
export class CompanyDocumentController extends CompanyDocumentControllerBase {
  constructor(protected readonly service: CompanyDocumentService) {
    super(service);
  }
}
