import * as graphql from "@nestjs/graphql";
import { CompanySurveyFieldResolverBase } from "./base/companySurveyField.resolver.base";
import { CompanySurveyField } from "./base/CompanySurveyField";
import { CompanySurveyFieldService } from "./companySurveyField.service";

@graphql.Resolver(() => CompanySurveyField)
export class CompanySurveyFieldResolver extends CompanySurveyFieldResolverBase {
  constructor(protected readonly service: CompanySurveyFieldService) {
    super(service);
  }
}
