import { CompanyDocumentWhereInput } from "./CompanyDocumentWhereInput";
import { CompanyDocumentOrderByInput } from "./CompanyDocumentOrderByInput";

export type CompanyDocumentFindManyArgs = {
  where?: CompanyDocumentWhereInput;
  orderBy?: Array<CompanyDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
