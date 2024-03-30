import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataTaskService } from "./masterdataTask.service";
import { MasterdataTaskGrpcControllerBase } from "./base/masterdataTask.grpc.controller.base";

@swagger.ApiTags("masterdataTasks")
@common.Controller("masterdataTasks")
export class MasterdataTaskGrpcController extends MasterdataTaskGrpcControllerBase {
  constructor(protected readonly service: MasterdataTaskService) {
    super(service);
  }
}
