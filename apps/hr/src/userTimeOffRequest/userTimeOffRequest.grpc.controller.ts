import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTimeOffRequestService } from "./userTimeOffRequest.service";
import { UserTimeOffRequestGrpcControllerBase } from "./base/userTimeOffRequest.grpc.controller.base";

@swagger.ApiTags("userTimeOffRequests")
@common.Controller("userTimeOffRequests")
export class UserTimeOffRequestGrpcController extends UserTimeOffRequestGrpcControllerBase {
  constructor(protected readonly service: UserTimeOffRequestService) {
    super(service);
  }
}
