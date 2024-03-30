import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTimeTrackingRequestService } from "./userTimeTrackingRequest.service";
import { UserTimeTrackingRequestGrpcControllerBase } from "./base/userTimeTrackingRequest.grpc.controller.base";

@swagger.ApiTags("userTimeTrackingRequests")
@common.Controller("userTimeTrackingRequests")
export class UserTimeTrackingRequestGrpcController extends UserTimeTrackingRequestGrpcControllerBase {
  constructor(protected readonly service: UserTimeTrackingRequestService) {
    super(service);
  }
}
