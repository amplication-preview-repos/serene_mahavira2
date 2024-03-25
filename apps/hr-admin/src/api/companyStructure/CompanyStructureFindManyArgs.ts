import { CompanyStructureWhereInput } from "./CompanyStructureWhereInput";
import { CompanyStructureOrderByInput } from "./CompanyStructureOrderByInput";

export type CompanyStructureFindManyArgs = {
  where?: CompanyStructureWhereInput;
  orderBy?: Array<CompanyStructureOrderByInput>;
  skip?: number;
  take?: number;
};
