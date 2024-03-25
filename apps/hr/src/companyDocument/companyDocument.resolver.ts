import * as graphql from "@nestjs/graphql";
import { CompanyDocumentResolverBase } from "./base/companyDocument.resolver.base";
import { CompanyDocument } from "./base/CompanyDocument";
import { CompanyDocumentService } from "./companyDocument.service";

@graphql.Resolver(() => CompanyDocument)
export class CompanyDocumentResolver extends CompanyDocumentResolverBase {
  constructor(protected readonly service: CompanyDocumentService) {
    super(service);
  }
}
