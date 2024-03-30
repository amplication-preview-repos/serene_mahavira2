import * as graphql from "@nestjs/graphql";
import { CompanySurveyResolverBase } from "./base/companySurvey.resolver.base";
import { CompanySurvey } from "./base/CompanySurvey";
import { CompanySurveyService } from "./companySurvey.service";

@graphql.Resolver(() => CompanySurvey)
export class CompanySurveyResolver extends CompanySurveyResolverBase {
  constructor(protected readonly service: CompanySurveyService) {
    super(service);
  }
}
