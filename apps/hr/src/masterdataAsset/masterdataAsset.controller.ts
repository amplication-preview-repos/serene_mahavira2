import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataAssetService } from "./masterdataAsset.service";
import { MasterdataAssetControllerBase } from "./base/masterdataAsset.controller.base";

@swagger.ApiTags("masterdataAssets")
@common.Controller("masterdataAssets")
export class MasterdataAssetController extends MasterdataAssetControllerBase {
  constructor(protected readonly service: MasterdataAssetService) {
    super(service);
  }
}
