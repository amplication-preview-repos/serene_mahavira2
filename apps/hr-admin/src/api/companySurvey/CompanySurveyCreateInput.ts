import { CompanySurveyFieldCreateNestedManyWithoutCompanySurveysInput } from "./CompanySurveyFieldCreateNestedManyWithoutCompanySurveysInput";
import { UserSurveyResponseCreateNestedManyWithoutCompanySurveysInput } from "./UserSurveyResponseCreateNestedManyWithoutCompanySurveysInput";

export type CompanySurveyCreateInput = {
  companySurveyFields?: CompanySurveyFieldCreateNestedManyWithoutCompanySurveysInput;
  description?: string | null;
  name?: string | null;
  userSurveyResponse?: UserSurveyResponseCreateNestedManyWithoutCompanySurveysInput;
};
