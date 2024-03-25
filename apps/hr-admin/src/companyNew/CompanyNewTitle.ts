import { CompanyNew as TCompanyNew } from "../api/companyNew/CompanyNew";

export const COMPANYNEW_TITLE_FIELD = "title";

export const CompanyNewTitle = (record: TCompanyNew): string => {
  return record.title?.toString() || String(record.id);
};
