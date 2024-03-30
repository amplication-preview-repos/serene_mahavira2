import { Module } from "@nestjs/common";
import { CompanySurveyFieldModuleBase } from "./base/companySurveyField.module.base";
import { CompanySurveyFieldService } from "./companySurveyField.service";
import { CompanySurveyFieldController } from "./companySurveyField.controller";
import { CompanySurveyFieldGrpcController } from "./companySurveyField.grpc.controller";
import { CompanySurveyFieldResolver } from "./companySurveyField.resolver";

@Module({
  imports: [CompanySurveyFieldModuleBase],
  controllers: [CompanySurveyFieldController, CompanySurveyFieldGrpcController],
  providers: [CompanySurveyFieldService, CompanySurveyFieldResolver],
  exports: [CompanySurveyFieldService],
})
export class CompanySurveyFieldModule {}
