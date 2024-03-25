import { Module } from "@nestjs/common";
import { MasterdataRoleModuleBase } from "./base/masterdataRole.module.base";
import { MasterdataRoleService } from "./masterdataRole.service";
import { MasterdataRoleController } from "./masterdataRole.controller";
import { MasterdataRoleResolver } from "./masterdataRole.resolver";

@Module({
  imports: [MasterdataRoleModuleBase],
  controllers: [MasterdataRoleController],
  providers: [MasterdataRoleService, MasterdataRoleResolver],
  exports: [MasterdataRoleService],
})
export class MasterdataRoleModule {}
