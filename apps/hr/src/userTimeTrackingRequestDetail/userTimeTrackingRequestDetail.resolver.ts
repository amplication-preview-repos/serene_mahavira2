import * as graphql from "@nestjs/graphql";
import { UserTimeTrackingRequestDetailResolverBase } from "./base/userTimeTrackingRequestDetail.resolver.base";
import { UserTimeTrackingRequestDetail } from "./base/UserTimeTrackingRequestDetail";
import { UserTimeTrackingRequestDetailService } from "./userTimeTrackingRequestDetail.service";

@graphql.Resolver(() => UserTimeTrackingRequestDetail)
export class UserTimeTrackingRequestDetailResolver extends UserTimeTrackingRequestDetailResolverBase {
  constructor(
    protected readonly service: UserTimeTrackingRequestDetailService
  ) {
    super(service);
  }
}
