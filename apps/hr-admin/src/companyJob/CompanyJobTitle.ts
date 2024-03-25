import { CompanyJob as TCompanyJob } from "../api/companyJob/CompanyJob";

export const COMPANYJOB_TITLE_FIELD = "title";

export const CompanyJobTitle = (record: TCompanyJob): string => {
  return record.title?.toString() || String(record.id);
};
