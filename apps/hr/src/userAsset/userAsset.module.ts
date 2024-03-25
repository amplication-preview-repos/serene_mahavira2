import { Module } from "@nestjs/common";
import { UserAssetModuleBase } from "./base/userAsset.module.base";
import { UserAssetService } from "./userAsset.service";
import { UserAssetController } from "./userAsset.controller";
import { UserAssetResolver } from "./userAsset.resolver";

@Module({
  imports: [UserAssetModuleBase],
  controllers: [UserAssetController],
  providers: [UserAssetService, UserAssetResolver],
  exports: [UserAssetService],
})
export class UserAssetModule {}
