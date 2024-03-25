import { Module } from "@nestjs/common";
import { CompanyStructureModuleBase } from "./base/companyStructure.module.base";
import { CompanyStructureService } from "./companyStructure.service";
import { CompanyStructureController } from "./companyStructure.controller";
import { CompanyStructureResolver } from "./companyStructure.resolver";

@Module({
  imports: [CompanyStructureModuleBase],
  controllers: [CompanyStructureController],
  providers: [CompanyStructureService, CompanyStructureResolver],
  exports: [CompanyStructureService],
})
export class CompanyStructureModule {}
