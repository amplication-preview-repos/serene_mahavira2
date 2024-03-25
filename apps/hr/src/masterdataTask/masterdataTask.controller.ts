import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataTaskService } from "./masterdataTask.service";
import { MasterdataTaskControllerBase } from "./base/masterdataTask.controller.base";

@swagger.ApiTags("masterdataTasks")
@common.Controller("masterdataTasks")
export class MasterdataTaskController extends MasterdataTaskControllerBase {
  constructor(protected readonly service: MasterdataTaskService) {
    super(service);
  }
}
