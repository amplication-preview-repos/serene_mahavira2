import { Module } from "@nestjs/common";
import { MasterdataTaskModuleBase } from "./base/masterdataTask.module.base";
import { MasterdataTaskService } from "./masterdataTask.service";
import { MasterdataTaskController } from "./masterdataTask.controller";
import { MasterdataTaskResolver } from "./masterdataTask.resolver";

@Module({
  imports: [MasterdataTaskModuleBase],
  controllers: [MasterdataTaskController],
  providers: [MasterdataTaskService, MasterdataTaskResolver],
  exports: [MasterdataTaskService],
})
export class MasterdataTaskModule {}