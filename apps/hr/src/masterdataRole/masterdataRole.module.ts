import { Module } from "@nestjs/common";
import { MasterdataRoleModuleBase } from "./base/masterdataRole.module.base";
import { MasterdataRoleService } from "./masterdataRole.service";
import { MasterdataRoleController } from "./masterdataRole.controller";
import { MasterdataRoleGrpcController } from "./masterdataRole.grpc.controller";
import { MasterdataRoleResolver } from "./masterdataRole.resolver";

@Module({
  imports: [MasterdataRoleModuleBase],
  controllers: [MasterdataRoleController, MasterdataRoleGrpcController],
  providers: [MasterdataRoleService, MasterdataRoleResolver],
  exports: [MasterdataRoleService],
})
export class MasterdataRoleModule {}
