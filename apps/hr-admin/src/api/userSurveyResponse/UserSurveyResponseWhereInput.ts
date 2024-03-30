import { CompanySurveyWhereUniqueInput } from "../companySurvey/CompanySurveyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserSurveyResponseWhereInput = {
  companySurvey?: CompanySurveyWhereUniqueInput;
  id?: StringFilter;
  responseJson?: JsonFilter;
  submittedAt?: DateTimeNullableFilter;
  userInfo?: UserInfoWhereUniqueInput;
};
