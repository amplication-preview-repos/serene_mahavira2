import * as graphql from "@nestjs/graphql";
import { UserTimeTrackingRequestResolverBase } from "./base/userTimeTrackingRequest.resolver.base";
import { UserTimeTrackingRequest } from "./base/UserTimeTrackingRequest";
import { UserTimeTrackingRequestService } from "./userTimeTrackingRequest.service";

@graphql.Resolver(() => UserTimeTrackingRequest)
export class UserTimeTrackingRequestResolver extends UserTimeTrackingRequestResolverBase {
  constructor(protected readonly service: UserTimeTrackingRequestService) {
    super(service);
  }
}
