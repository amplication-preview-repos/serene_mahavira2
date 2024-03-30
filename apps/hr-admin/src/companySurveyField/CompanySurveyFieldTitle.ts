import { CompanySurveyField as TCompanySurveyField } from "../api/companySurveyField/CompanySurveyField";

export const COMPANYSURVEYFIELD_TITLE_FIELD = "fieldType";

export const CompanySurveyFieldTitle = (
  record: TCompanySurveyField
): string => {
  return record.fieldType?.toString() || String(record.id);
};
