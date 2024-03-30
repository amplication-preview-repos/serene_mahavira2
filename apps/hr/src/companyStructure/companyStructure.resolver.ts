import * as graphql from "@nestjs/graphql";
import { CompanyStructureResolverBase } from "./base/companyStructure.resolver.base";
import { CompanyStructure } from "./base/CompanyStructure";
import { CompanyStructureService } from "./companyStructure.service";

@graphql.Resolver(() => CompanyStructure)
export class CompanyStructureResolver extends CompanyStructureResolverBase {
  constructor(protected readonly service: CompanyStructureService) {
    super(service);
  }
}
