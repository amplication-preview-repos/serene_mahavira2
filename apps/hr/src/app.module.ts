import { Module } from "@nestjs/common";
import { CompanyCalendarModule } from "./companyCalendar/companyCalendar.module";
import { CompanyDocumentModule } from "./companyDocument/companyDocument.module";
import { CompanyJobModule } from "./companyJob/companyJob.module";
import { CompanyJobApplyModule } from "./companyJobApply/companyJobApply.module";
import { CompanyNewModule } from "./companyNew/companyNew.module";
import { CompanyRecognitionModule } from "./companyRecognition/companyRecognition.module";
import { CompanyStructureModule } from "./companyStructure/companyStructure.module";
import { CompanySurveyModule } from "./companySurvey/companySurvey.module";
import { CompanySurveyFieldModule } from "./companySurveyField/companySurveyField.module";
import { MasterdataAssetModule } from "./masterdataAsset/masterdataAsset.module";
import { MasterdataRoleModule } from "./masterdataRole/masterdataRole.module";
import { MasterdataTaskModule } from "./masterdataTask/masterdataTask.module";
import { MasterdataTimeOffModule } from "./masterdataTimeOff/masterdataTimeOff.module";
import { UserAssetModule } from "./userAsset/userAsset.module";
import { UserExpenseRequestModule } from "./userExpenseRequest/userExpenseRequest.module";
import { UserInfoModule } from "./userInfo/userInfo.module";
import { UserNotificationModule } from "./userNotification/userNotification.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { UserSurveyResponseModule } from "./userSurveyResponse/userSurveyResponse.module";
import { UserTimeOffRequestModule } from "./userTimeOffRequest/userTimeOffRequest.module";
import { UserTimeTrackingRequestModule } from "./userTimeTrackingRequest/userTimeTrackingRequest.module";
import { UserTimeTrackingRequestDetailModule } from "./userTimeTrackingRequestDetail/userTimeTrackingRequestDetail.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CompanyCalendarModule,
    CompanyDocumentModule,
    CompanyJobModule,
    CompanyJobApplyModule,
    CompanyNewModule,
    CompanyRecognitionModule,
    CompanyStructureModule,
    CompanySurveyModule,
    CompanySurveyFieldModule,
    MasterdataAssetModule,
    MasterdataRoleModule,
    MasterdataTaskModule,
    MasterdataTimeOffModule,
    UserAssetModule,
    UserExpenseRequestModule,
    UserInfoModule,
    UserNotificationModule,
    UserRoleModule,
    UserSurveyResponseModule,
    UserTimeOffRequestModule,
    UserTimeTrackingRequestModule,
    UserTimeTrackingRequestDetailModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
