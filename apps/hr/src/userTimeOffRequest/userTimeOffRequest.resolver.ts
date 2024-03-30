import * as graphql from "@nestjs/graphql";
import { UserTimeOffRequestResolverBase } from "./base/userTimeOffRequest.resolver.base";
import { UserTimeOffRequest } from "./base/UserTimeOffRequest";
import { UserTimeOffRequestService } from "./userTimeOffRequest.service";

@graphql.Resolver(() => UserTimeOffRequest)
export class UserTimeOffRequestResolver extends UserTimeOffRequestResolverBase {
  constructor(protected readonly service: UserTimeOffRequestService) {
    super(service);
  }
}
