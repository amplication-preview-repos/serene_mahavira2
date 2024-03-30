import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTimeTrackingRequestDetailService } from "./userTimeTrackingRequestDetail.service";
import { UserTimeTrackingRequestDetailGrpcControllerBase } from "./base/userTimeTrackingRequestDetail.grpc.controller.base";

@swagger.ApiTags("userTimeTrackingRequestDetails")
@common.Controller("userTimeTrackingRequestDetails")
export class UserTimeTrackingRequestDetailGrpcController extends UserTimeTrackingRequestDetailGrpcControllerBase {
  constructor(
    protected readonly service: UserTimeTrackingRequestDetailService
  ) {
    super(service);
  }
}
