import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataRoleService } from "./masterdataRole.service";
import { MasterdataRoleGrpcControllerBase } from "./base/masterdataRole.grpc.controller.base";

@swagger.ApiTags("masterdataRoles")
@common.Controller("masterdataRoles")
export class MasterdataRoleGrpcController extends MasterdataRoleGrpcControllerBase {
  constructor(protected readonly service: MasterdataRoleService) {
    super(service);
  }
}
