import { Module } from "@nestjs/common";
import { UserSurveyResponseModuleBase } from "./base/userSurveyResponse.module.base";
import { UserSurveyResponseService } from "./userSurveyResponse.service";
import { UserSurveyResponseController } from "./userSurveyResponse.controller";
import { UserSurveyResponseResolver } from "./userSurveyResponse.resolver";

@Module({
  imports: [UserSurveyResponseModuleBase],
  controllers: [UserSurveyResponseController],
  providers: [UserSurveyResponseService, UserSurveyResponseResolver],
  exports: [UserSurveyResponseService],
})
export class UserSurveyResponseModule {}
