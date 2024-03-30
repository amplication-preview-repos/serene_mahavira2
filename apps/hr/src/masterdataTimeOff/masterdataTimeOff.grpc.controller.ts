import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterdataTimeOffService } from "./masterdataTimeOff.service";
import { MasterdataTimeOffGrpcControllerBase } from "./base/masterdataTimeOff.grpc.controller.base";

@swagger.ApiTags("masterdataTimeOffs")
@common.Controller("masterdataTimeOffs")
export class MasterdataTimeOffGrpcController extends MasterdataTimeOffGrpcControllerBase {
  constructor(protected readonly service: MasterdataTimeOffService) {
    super(service);
  }
}
