import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataAssetService } from "./masterdataAsset.service";
import { MasterdataAssetGrpcControllerBase } from "./base/masterdataAsset.grpc.controller.base";

@swagger.ApiTags("masterdataAssets")
@common.Controller("masterdataAssets")
export class MasterdataAssetGrpcController extends MasterdataAssetGrpcControllerBase {
  constructor(protected readonly service: MasterdataAssetService) {
    super(service);
  }
}
