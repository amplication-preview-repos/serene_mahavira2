import { CompanyJobWhereInput } from "./CompanyJobWhereInput";
import { CompanyJobOrderByInput } from "./CompanyJobOrderByInput";

export type CompanyJobFindManyArgs = {
  where?: CompanyJobWhereInput;
  orderBy?: Array<CompanyJobOrderByInput>;
  skip?: number;
  take?: number;
};
