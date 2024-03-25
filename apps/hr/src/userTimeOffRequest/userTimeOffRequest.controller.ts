import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTimeOffRequestService } from "./userTimeOffRequest.service";
import { UserTimeOffRequestControllerBase } from "./base/userTimeOffRequest.controller.base";

@swagger.ApiTags("userTimeOffRequests")
@common.Controller("userTimeOffRequests")
export class UserTimeOffRequestController extends UserTimeOffRequestControllerBase {
  constructor(protected readonly service: UserTimeOffRequestService) {
    super(service);
  }
}
