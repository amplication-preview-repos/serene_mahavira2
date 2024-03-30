import { CompanyDocument as TCompanyDocument } from "../api/companyDocument/CompanyDocument";

export const COMPANYDOCUMENT_TITLE_FIELD = "name";

export const CompanyDocumentTitle = (record: TCompanyDocument): string => {
  return record.name?.toString() || String(record.id);
};
