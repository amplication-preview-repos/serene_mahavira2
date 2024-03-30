import { Module } from "@nestjs/common";
import { UserInfoModuleBase } from "./base/userInfo.module.base";
import { UserInfoService } from "./userInfo.service";
import { UserInfoController } from "./userInfo.controller";
import { UserInfoGrpcController } from "./userInfo.grpc.controller";
import { UserInfoResolver } from "./userInfo.resolver";

@Module({
  imports: [UserInfoModuleBase],
  controllers: [UserInfoController, UserInfoGrpcController],
  providers: [UserInfoService, UserInfoResolver],
  exports: [UserInfoService],
})
export class UserInfoModule {}
