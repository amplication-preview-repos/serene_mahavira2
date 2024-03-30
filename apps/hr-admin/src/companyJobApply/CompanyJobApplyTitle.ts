import { CompanyJobApply as TCompanyJobApply } from "../api/companyJobApply/CompanyJobApply";

export const COMPANYJOBAPPLY_TITLE_FIELD = "fullName";

export const CompanyJobApplyTitle = (record: TCompanyJobApply): string => {
  return record.fullName?.toString() || String(record.id);
};
