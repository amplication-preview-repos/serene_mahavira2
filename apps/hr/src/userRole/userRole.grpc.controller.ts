import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserRoleService } from "./userRole.service";
import { UserRoleGrpcControllerBase } from "./base/userRole.grpc.controller.base";

@swagger.ApiTags("userRoles")
@common.Controller("userRoles")
export class UserRoleGrpcController extends UserRoleGrpcControllerBase {
  constructor(protected readonly service: UserRoleService) {
    super(service);
  }
}
