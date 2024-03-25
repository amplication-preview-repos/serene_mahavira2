import { Module } from "@nestjs/common";
import { MasterdataAssetModuleBase } from "./base/masterdataAsset.module.base";
import { MasterdataAssetService } from "./masterdataAsset.service";
import { MasterdataAssetController } from "./masterdataAsset.controller";
import { MasterdataAssetResolver } from "./masterdataAsset.resolver";

@Module({
  imports: [MasterdataAssetModuleBase],
  controllers: [MasterdataAssetController],
  providers: [MasterdataAssetService, MasterdataAssetResolver],
  exports: [MasterdataAssetService],
})
export class MasterdataAssetModule {}
