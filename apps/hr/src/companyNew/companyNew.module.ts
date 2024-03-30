import { Module } from "@nestjs/common";
import { CompanyNewModuleBase } from "./base/companyNew.module.base";
import { CompanyNewService } from "./companyNew.service";
import { CompanyNewController } from "./companyNew.controller";
import { CompanyNewGrpcController } from "./companyNew.grpc.controller";
import { CompanyNewResolver } from "./companyNew.resolver";

@Module({
  imports: [CompanyNewModuleBase],
  controllers: [CompanyNewController, CompanyNewGrpcController],
  providers: [CompanyNewService, CompanyNewResolver],
  exports: [CompanyNewService],
})
export class CompanyNewModule {}
