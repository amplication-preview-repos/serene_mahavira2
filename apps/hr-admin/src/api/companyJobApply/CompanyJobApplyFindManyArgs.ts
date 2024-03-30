import { CompanyJobApplyWhereInput } from "./CompanyJobApplyWhereInput";
import { CompanyJobApplyOrderByInput } from "./CompanyJobApplyOrderByInput";

export type CompanyJobApplyFindManyArgs = {
  where?: CompanyJobApplyWhereInput;
  orderBy?: Array<CompanyJobApplyOrderByInput>;
  skip?: number;
  take?: number;
};
