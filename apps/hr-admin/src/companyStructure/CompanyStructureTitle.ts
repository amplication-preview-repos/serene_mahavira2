import { CompanyStructure as TCompanyStructure } from "../api/companyStructure/CompanyStructure";

export const COMPANYSTRUCTURE_TITLE_FIELD = "name";

export const CompanyStructureTitle = (record: TCompanyStructure): string => {
  return record.name?.toString() || String(record.id);
};
