import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserExpenseRequestService } from "./userExpenseRequest.service";
import { UserExpenseRequestGrpcControllerBase } from "./base/userExpenseRequest.grpc.controller.base";

@swagger.ApiTags("userExpenseRequests")
@common.Controller("userExpenseRequests")
export class UserExpenseRequestGrpcController extends UserExpenseRequestGrpcControllerBase {
  constructor(protected readonly service: UserExpenseRequestService) {
    super(service);
  }
}
