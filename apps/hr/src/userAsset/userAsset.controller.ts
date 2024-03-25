import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAssetService } from "./userAsset.service";
import { UserAssetControllerBase } from "./base/userAsset.controller.base";

@swagger.ApiTags("userAssets")
@common.Controller("userAssets")
export class UserAssetController extends UserAssetControllerBase {
  constructor(protected readonly service: UserAssetService) {
    super(service);
  }
}
