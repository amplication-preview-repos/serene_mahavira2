import { Module } from "@nestjs/common";
import { CompanySurveyModuleBase } from "./base/companySurvey.module.base";
import { CompanySurveyService } from "./companySurvey.service";
import { CompanySurveyController } from "./companySurvey.controller";
import { CompanySurveyResolver } from "./companySurvey.resolver";

@Module({
  imports: [CompanySurveyModuleBase],
  controllers: [CompanySurveyController],
  providers: [CompanySurveyService, CompanySurveyResolver],
  exports: [CompanySurveyService],
})
export class CompanySurveyModule {}
