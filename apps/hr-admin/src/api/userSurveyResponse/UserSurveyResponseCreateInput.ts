import { CompanySurveyWhereUniqueInput } from "../companySurvey/CompanySurveyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserSurveyResponseCreateInput = {
  companySurvey?: CompanySurveyWhereUniqueInput | null;
  responseJson?: InputJsonValue;
  submittedAt?: Date | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
