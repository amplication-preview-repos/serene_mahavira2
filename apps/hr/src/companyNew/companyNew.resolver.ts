import * as graphql from "@nestjs/graphql";
import { CompanyNewResolverBase } from "./base/companyNew.resolver.base";
import { CompanyNew } from "./base/CompanyNew";
import { CompanyNewService } from "./companyNew.service";

@graphql.Resolver(() => CompanyNew)
export class CompanyNewResolver extends CompanyNewResolverBase {
  constructor(protected readonly service: CompanyNewService) {
    super(service);
  }
}
