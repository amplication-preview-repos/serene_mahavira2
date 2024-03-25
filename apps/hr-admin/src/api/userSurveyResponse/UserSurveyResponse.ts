import { CompanySurvey } from "../companySurvey/CompanySurvey";
import { JsonValue } from "type-fest";
import { UserInfo } from "../userInfo/UserInfo";

export type UserSurveyResponse = {
  companySurvey?: CompanySurvey | null;
  id: string;
  responseJson: JsonValue;
  submittedAt: Date | null;
  userInfo?: UserInfo | null;
};
