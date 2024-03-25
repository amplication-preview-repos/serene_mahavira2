import { Module } from "@nestjs/common";
import { CompanyJobModuleBase } from "./base/companyJob.module.base";
import { CompanyJobService } from "./companyJob.service";
import { CompanyJobController } from "./companyJob.controller";
import { CompanyJobResolver } from "./companyJob.resolver";

@Module({
  imports: [CompanyJobModuleBase],
  controllers: [CompanyJobController],
  providers: [CompanyJobService, CompanyJobResolver],
  exports: [CompanyJobService],
})
export class CompanyJobModule {}
