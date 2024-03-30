import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "companycalendar",
      "companydocument",
      "companyjob",
      "companyjobapply",
      "companynew",
      "companyrecognition",
      "companystructure",
      "companysurvey",
      "companysurveyfield",
      "masterdataasset",
      "masterdatarole",
      "masterdatatask",
      "masterdatatimeoff",
      "userasset",
      "userexpenserequest",
      "userinfo",
      "usernotification",
      "userrole",
      "usersurveyresponse",
      "usertimeoffrequest",
      "usertimetrackingrequest",
      "usertimetrackingrequestdetail"
    ],
    protoPath: [
      "src/companycalendar/companycalendar.proto",
      "src/companydocument/companydocument.proto",
      "src/companyjob/companyjob.proto",
      "src/companyjobapply/companyjobapply.proto",
      "src/companynew/companynew.proto",
      "src/companyrecognition/companyrecognition.proto",
      "src/companystructure/companystructure.proto",
      "src/companysurvey/companysurvey.proto",
      "src/companysurveyfield/companysurveyfield.proto",
      "src/masterdataasset/masterdataasset.proto",
      "src/masterdatarole/masterdatarole.proto",
      "src/masterdatatask/masterdatatask.proto",
      "src/masterdatatimeoff/masterdatatimeoff.proto",
      "src/userasset/userasset.proto",
      "src/userexpenserequest/userexpenserequest.proto",
      "src/userinfo/userinfo.proto",
      "src/usernotification/usernotification.proto",
      "src/userrole/userrole.proto",
      "src/usersurveyresponse/usersurveyresponse.proto",
      "src/usertimeoffrequest/usertimeoffrequest.proto",
      "src/usertimetrackingrequest/usertimetrackingrequest.proto",
      "src/usertimetrackingrequestdetail/usertimetrackingrequestdetail.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
