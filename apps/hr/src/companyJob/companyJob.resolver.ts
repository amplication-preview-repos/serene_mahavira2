import * as graphql from "@nestjs/graphql";
import { CompanyJobResolverBase } from "./base/companyJob.resolver.base";
import { CompanyJob } from "./base/CompanyJob";
import { CompanyJobService } from "./companyJob.service";

@graphql.Resolver(() => CompanyJob)
export class CompanyJobResolver extends CompanyJobResolverBase {
  constructor(protected readonly service: CompanyJobService) {
    super(service);
  }
}
