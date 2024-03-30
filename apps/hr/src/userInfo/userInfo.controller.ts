import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserInfoService } from "./userInfo.service";
import { UserInfoControllerBase } from "./base/userInfo.controller.base";

@swagger.ApiTags("userInfos")
@common.Controller("userInfos")
export class UserInfoController extends UserInfoControllerBase {
  constructor(protected readonly service: UserInfoService) {
    super(service);
  }
}
