import { CompanySurveyFieldListRelationFilter } from "../companySurveyField/CompanySurveyFieldListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserSurveyResponseListRelationFilter } from "../userSurveyResponse/UserSurveyResponseListRelationFilter";

export type CompanySurveyWhereInput = {
  companySurveyFields?: CompanySurveyFieldListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  userSurveyResponse?: UserSurveyResponseListRelationFilter;
};
