import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAssetService } from "./userAsset.service";
import { UserAssetGrpcControllerBase } from "./base/userAsset.grpc.controller.base";

@swagger.ApiTags("userAssets")
@common.Controller("userAssets")
export class UserAssetGrpcController extends UserAssetGrpcControllerBase {
  constructor(protected readonly service: UserAssetService) {
    super(service);
  }
}
