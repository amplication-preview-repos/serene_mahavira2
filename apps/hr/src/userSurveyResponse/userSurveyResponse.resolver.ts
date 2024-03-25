import * as graphql from "@nestjs/graphql";
import { UserSurveyResponseResolverBase } from "./base/userSurveyResponse.resolver.base";
import { UserSurveyResponse } from "./base/UserSurveyResponse";
import { UserSurveyResponseService } from "./userSurveyResponse.service";

@graphql.Resolver(() => UserSurveyResponse)
export class UserSurveyResponseResolver extends UserSurveyResponseResolverBase {
  constructor(protected readonly service: UserSurveyResponseService) {
    super(service);
  }
}
