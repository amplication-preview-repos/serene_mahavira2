import { CompanySurveyFieldUpdateManyWithoutCompanySurveysInput } from "./CompanySurveyFieldUpdateManyWithoutCompanySurveysInput";
import { UserSurveyResponseUpdateManyWithoutCompanySurveysInput } from "./UserSurveyResponseUpdateManyWithoutCompanySurveysInput";

export type CompanySurveyUpdateInput = {
  companySurveyFields?: CompanySurveyFieldUpdateManyWithoutCompanySurveysInput;
  description?: string | null;
  name?: string | null;
  userSurveyResponse?: UserSurveyResponseUpdateManyWithoutCompanySurveysInput;
};
