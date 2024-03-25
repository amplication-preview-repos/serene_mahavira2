import { Module } from "@nestjs/common";
import { UserTimeTrackingRequestModuleBase } from "./base/userTimeTrackingRequest.module.base";
import { UserTimeTrackingRequestService } from "./userTimeTrackingRequest.service";
import { UserTimeTrackingRequestController } from "./userTimeTrackingRequest.controller";
import { UserTimeTrackingRequestResolver } from "./userTimeTrackingRequest.resolver";

@Module({
  imports: [UserTimeTrackingRequestModuleBase],
  controllers: [UserTimeTrackingRequestController],
  providers: [UserTimeTrackingRequestService, UserTimeTrackingRequestResolver],
  exports: [UserTimeTrackingRequestService],
})
export class UserTimeTrackingRequestModule {}
