import { Module } from "@nestjs/common";
import { CompanyNewModuleBase } from "./base/companyNew.module.base";
import { CompanyNewService } from "./companyNew.service";
import { CompanyNewController } from "./companyNew.controller";
import { CompanyNewResolver } from "./companyNew.resolver";

@Module({
  imports: [CompanyNewModuleBase],
  controllers: [CompanyNewController],
  providers: [CompanyNewService, CompanyNewResolver],
  exports: [CompanyNewService],
})
export class CompanyNewModule {}
