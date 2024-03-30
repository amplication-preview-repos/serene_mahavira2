import { Module } from "@nestjs/common";
import { CompanyRecognitionModuleBase } from "./base/companyRecognition.module.base";
import { CompanyRecognitionService } from "./companyRecognition.service";
import { CompanyRecognitionController } from "./companyRecognition.controller";
import { CompanyRecognitionGrpcController } from "./companyRecognition.grpc.controller";
import { CompanyRecognitionResolver } from "./companyRecognition.resolver";

@Module({
  imports: [CompanyRecognitionModuleBase],
  controllers: [CompanyRecognitionController, CompanyRecognitionGrpcController],
  providers: [CompanyRecognitionService, CompanyRecognitionResolver],
  exports: [CompanyRecognitionService],
})
export class CompanyRecognitionModule {}
