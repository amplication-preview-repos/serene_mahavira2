import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataRoleService } from "./masterdataRole.service";
import { MasterdataRoleControllerBase } from "./base/masterdataRole.controller.base";

@swagger.ApiTags("masterdataRoles")
@common.Controller("masterdataRoles")
export class MasterdataRoleController extends MasterdataRoleControllerBase {
  constructor(protected readonly service: MasterdataRoleService) {
    super(service);
  }
}
