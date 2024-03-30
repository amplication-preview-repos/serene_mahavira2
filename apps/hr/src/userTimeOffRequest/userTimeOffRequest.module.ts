import { Module } from "@nestjs/common";
import { UserTimeOffRequestModuleBase } from "./base/userTimeOffRequest.module.base";
import { UserTimeOffRequestService } from "./userTimeOffRequest.service";
import { UserTimeOffRequestController } from "./userTimeOffRequest.controller";
import { UserTimeOffRequestGrpcController } from "./userTimeOffRequest.grpc.controller";
import { UserTimeOffRequestResolver } from "./userTimeOffRequest.resolver";

@Module({
  imports: [UserTimeOffRequestModuleBase],
  controllers: [UserTimeOffRequestController, UserTimeOffRequestGrpcController],
  providers: [UserTimeOffRequestService, UserTimeOffRequestResolver],
  exports: [UserTimeOffRequestService],
})
export class UserTimeOffRequestModule {}
