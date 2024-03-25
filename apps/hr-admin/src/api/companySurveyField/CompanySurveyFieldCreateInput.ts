import { CompanySurveyWhereUniqueInput } from "../companySurvey/CompanySurveyWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CompanySurveyFieldCreateInput = {
  companySurvey?: CompanySurveyWhereUniqueInput | null;
  fieldConfig?: InputJsonValue;
  fieldType?: string | null;
  isRequired?: boolean | null;
  label?: string | null;
  position?: number | null;
};