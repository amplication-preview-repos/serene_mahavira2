import { CompanySurvey as TCompanySurvey } from "../api/companySurvey/CompanySurvey";

export const COMPANYSURVEY_TITLE_FIELD = "name";

export const CompanySurveyTitle = (record: TCompanySurvey): string => {
  return record.name?.toString() || String(record.id);
};
