import { Module } from "@nestjs/common";
import { UserExpenseRequestModuleBase } from "./base/userExpenseRequest.module.base";
import { UserExpenseRequestService } from "./userExpenseRequest.service";
import { UserExpenseRequestController } from "./userExpenseRequest.controller";
import { UserExpenseRequestGrpcController } from "./userExpenseRequest.grpc.controller";
import { UserExpenseRequestResolver } from "./userExpenseRequest.resolver";

@Module({
  imports: [UserExpenseRequestModuleBase],
  controllers: [UserExpenseRequestController, UserExpenseRequestGrpcController],
  providers: [UserExpenseRequestService, UserExpenseRequestResolver],
  exports: [UserExpenseRequestService],
})
export class UserExpenseRequestModule {}
