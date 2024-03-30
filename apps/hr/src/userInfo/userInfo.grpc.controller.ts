import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserInfoService } from "./userInfo.service";
import { UserInfoGrpcControllerBase } from "./base/userInfo.grpc.controller.base";

@swagger.ApiTags("userInfos")
@common.Controller("userInfos")
export class UserInfoGrpcController extends UserInfoGrpcControllerBase {
  constructor(protected readonly service: UserInfoService) {
    super(service);
  }
}
