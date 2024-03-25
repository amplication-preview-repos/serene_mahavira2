import { Module } from "@nestjs/common";
import { CompanyJobApplyModuleBase } from "./base/companyJobApply.module.base";
import { CompanyJobApplyService } from "./companyJobApply.service";
import { CompanyJobApplyController } from "./companyJobApply.controller";
import { CompanyJobApplyResolver } from "./companyJobApply.resolver";

@Module({
  imports: [CompanyJobApplyModuleBase],
  controllers: [CompanyJobApplyController],
  providers: [CompanyJobApplyService, CompanyJobApplyResolver],
  exports: [CompanyJobApplyService],
})
export class CompanyJobApplyModule {}
