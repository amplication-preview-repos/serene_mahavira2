import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserExpenseRequestService } from "./userExpenseRequest.service";
import { UserExpenseRequestControllerBase } from "./base/userExpenseRequest.controller.base";

@swagger.ApiTags("userExpenseRequests")
@common.Controller("userExpenseRequests")
export class UserExpenseRequestController extends UserExpenseRequestControllerBase {
  constructor(protected readonly service: UserExpenseRequestService) {
    super(service);
  }
}
