import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTimeTrackingRequestService } from "./userTimeTrackingRequest.service";
import { UserTimeTrackingRequestControllerBase } from "./base/userTimeTrackingRequest.controller.base";

@swagger.ApiTags("userTimeTrackingRequests")
@common.Controller("userTimeTrackingRequests")
export class UserTimeTrackingRequestController extends UserTimeTrackingRequestControllerBase {
  constructor(protected readonly service: UserTimeTrackingRequestService) {
    super(service);
  }
}
