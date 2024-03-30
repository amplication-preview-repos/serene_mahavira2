import * as graphql from "@nestjs/graphql";
import { CompanyJobApplyResolverBase } from "./base/companyJobApply.resolver.base";
import { CompanyJobApply } from "./base/CompanyJobApply";
import { CompanyJobApplyService } from "./companyJobApply.service";

@graphql.Resolver(() => CompanyJobApply)
export class CompanyJobApplyResolver extends CompanyJobApplyResolverBase {
  constructor(protected readonly service: CompanyJobApplyService) {
    super(service);
  }
}
