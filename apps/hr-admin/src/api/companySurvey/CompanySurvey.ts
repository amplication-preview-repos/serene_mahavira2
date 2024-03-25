import { CompanySurveyField } from "../companySurveyField/CompanySurveyField";
import { UserSurveyResponse } from "../userSurveyResponse/UserSurveyResponse";

export type CompanySurvey = {
  companySurveyFields?: Array<CompanySurveyField>;
  description: string | null;
  id: string;
  name: string | null;
  userSurveyResponse?: Array<UserSurveyResponse>;
};
