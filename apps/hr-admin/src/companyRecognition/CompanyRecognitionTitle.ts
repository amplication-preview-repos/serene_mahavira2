import { CompanyRecognition as TCompanyRecognition } from "../api/companyRecognition/CompanyRecognition";

export const COMPANYRECOGNITION_TITLE_FIELD = "title";

export const CompanyRecognitionTitle = (
  record: TCompanyRecognition
): string => {
  return record.title?.toString() || String(record.id);
};
