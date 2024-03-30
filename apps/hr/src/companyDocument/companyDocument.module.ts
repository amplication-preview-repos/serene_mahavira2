import { Module } from "@nestjs/common";
import { CompanyDocumentModuleBase } from "./base/companyDocument.module.base";
import { CompanyDocumentService } from "./companyDocument.service";
import { CompanyDocumentController } from "./companyDocument.controller";
import { CompanyDocumentGrpcController } from "./companyDocument.grpc.controller";
import { CompanyDocumentResolver } from "./companyDocument.resolver";

@Module({
  imports: [CompanyDocumentModuleBase],
  controllers: [CompanyDocumentController, CompanyDocumentGrpcController],
  providers: [CompanyDocumentService, CompanyDocumentResolver],
  exports: [CompanyDocumentService],
})
export class CompanyDocumentModule {}
