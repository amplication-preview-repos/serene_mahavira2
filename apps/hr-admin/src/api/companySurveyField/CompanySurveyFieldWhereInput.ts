import { CompanySurveyWhereUniqueInput } from "../companySurvey/CompanySurveyWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CompanySurveyFieldWhereInput = {
  companySurvey?: CompanySurveyWhereUniqueInput;
  fieldConfig?: JsonFilter;
  fieldType?: StringNullableFilter;
  id?: StringFilter;
  isRequired?: BooleanNullableFilter;
  label?: StringNullableFilter;
  position?: IntNullableFilter;
};
