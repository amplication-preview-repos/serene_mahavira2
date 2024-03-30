import { CompanySurveyWhereUniqueInput } from "../companySurvey/CompanySurveyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserSurveyResponseUpdateInput = {
  companySurvey?: CompanySurveyWhereUniqueInput | null;
  responseJson?: InputJsonValue;
  submittedAt?: Date | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
