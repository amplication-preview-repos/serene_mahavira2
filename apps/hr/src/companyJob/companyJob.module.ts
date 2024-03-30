import { Module } from "@nestjs/common";
import { CompanyJobModuleBase } from "./base/companyJob.module.base";
import { CompanyJobService } from "./companyJob.service";
import { CompanyJobController } from "./companyJob.controller";
import { CompanyJobGrpcController } from "./companyJob.grpc.controller";
import { CompanyJobResolver } from "./companyJob.resolver";

@Module({
  imports: [CompanyJobModuleBase],
  controllers: [CompanyJobController, CompanyJobGrpcController],
  providers: [CompanyJobService, CompanyJobResolver],
  exports: [CompanyJobService],
})
export class CompanyJobModule {}
