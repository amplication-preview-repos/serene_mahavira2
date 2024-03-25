import { Module } from "@nestjs/common";
import { UserTimeOffRequestModuleBase } from "./base/userTimeOffRequest.module.base";
import { UserTimeOffRequestService } from "./userTimeOffRequest.service";
import { UserTimeOffRequestController } from "./userTimeOffRequest.controller";
import { UserTimeOffRequestResolver } from "./userTimeOffRequest.resolver";

@Module({
  imports: [UserTimeOffRequestModuleBase],
  controllers: [UserTimeOffRequestController],
  providers: [UserTimeOffRequestService, UserTimeOffRequestResolver],
  exports: [UserTimeOffRequestService],
})
export class UserTimeOffRequestModule {}
