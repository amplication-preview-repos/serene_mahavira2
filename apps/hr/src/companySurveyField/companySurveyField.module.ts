import { Module } from "@nestjs/common";
import { CompanySurveyFieldModuleBase } from "./base/companySurveyField.module.base";
import { CompanySurveyFieldService } from "./companySurveyField.service";
import { CompanySurveyFieldController } from "./companySurveyField.controller";
import { CompanySurveyFieldResolver } from "./companySurveyField.resolver";

@Module({
  imports: [CompanySurveyFieldModuleBase],
  controllers: [CompanySurveyFieldController],
  providers: [CompanySurveyFieldService, CompanySurveyFieldResolver],
  exports: [CompanySurveyFieldService],
})
export class CompanySurveyFieldModule {}
