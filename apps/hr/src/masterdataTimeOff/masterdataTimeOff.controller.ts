import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataTimeOffService } from "./masterdataTimeOff.service";
import { MasterdataTimeOffControllerBase } from "./base/masterdataTimeOff.controller.base";

@swagger.ApiTags("masterdataTimeOffs")
@common.Controller("masterdataTimeOffs")
export class MasterdataTimeOffController extends MasterdataTimeOffControllerBase {
  constructor(protected readonly service: MasterdataTimeOffService) {
    super(service);
  }
}
