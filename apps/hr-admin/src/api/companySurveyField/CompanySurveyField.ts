import { CompanySurvey } from "../companySurvey/CompanySurvey";
import { JsonValue } from "type-fest";

export type CompanySurveyField = {
  companySurvey?: CompanySurvey | null;
  fieldConfig: JsonValue;
  fieldType: string | null;
  id: string;
  isRequired: boolean | null;
  label: string | null;
  position: number | null;
};
