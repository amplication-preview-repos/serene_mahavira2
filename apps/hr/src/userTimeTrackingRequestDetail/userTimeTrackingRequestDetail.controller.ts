import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTimeTrackingRequestDetailService } from "./userTimeTrackingRequestDetail.service";
import { UserTimeTrackingRequestDetailControllerBase } from "./base/userTimeTrackingRequestDetail.controller.base";

@swagger.ApiTags("userTimeTrackingRequestDetails")
@common.Controller("userTimeTrackingRequestDetails")
export class UserTimeTrackingRequestDetailController extends UserTimeTrackingRequestDetailControllerBase {
  constructor(
    protected readonly service: UserTimeTrackingRequestDetailService
  ) {
    super(service);
  }
}
