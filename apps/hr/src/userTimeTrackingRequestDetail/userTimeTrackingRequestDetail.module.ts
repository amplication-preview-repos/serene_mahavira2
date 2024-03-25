import { Module } from "@nestjs/common";
import { UserTimeTrackingRequestDetailModuleBase } from "./base/userTimeTrackingRequestDetail.module.base";
import { UserTimeTrackingRequestDetailService } from "./userTimeTrackingRequestDetail.service";
import { UserTimeTrackingRequestDetailController } from "./userTimeTrackingRequestDetail.controller";
import { UserTimeTrackingRequestDetailResolver } from "./userTimeTrackingRequestDetail.resolver";

@Module({
  imports: [UserTimeTrackingRequestDetailModuleBase],
  controllers: [UserTimeTrackingRequestDetailController],
  providers: [
    UserTimeTrackingRequestDetailService,
    UserTimeTrackingRequestDetailResolver,
  ],
  exports: [UserTimeTrackingRequestDetailService],
})
export class UserTimeTrackingRequestDetailModule {}
