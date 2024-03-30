import { Module } from "@nestjs/common";
import { MasterdataTimeOffModuleBase } from "./base/masterdataTimeOff.module.base";
import { MasterdataTimeOffService } from "./masterdataTimeOff.service";
import { MasterdataTimeOffController } from "./masterdataTimeOff.controller";
import { MasterdataTimeOffGrpcController } from "./masterdataTimeOff.grpc.controller";
import { MasterdataTimeOffResolver } from "./masterdataTimeOff.resolver";

@Module({
  imports: [MasterdataTimeOffModuleBase],
  controllers: [MasterdataTimeOffController, MasterdataTimeOffGrpcController],
  providers: [MasterdataTimeOffService, MasterdataTimeOffResolver],
  exports: [MasterdataTimeOffService],
})
export class MasterdataTimeOffModule {}
