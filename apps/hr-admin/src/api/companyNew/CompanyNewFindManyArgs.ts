import { CompanyNewWhereInput } from "./CompanyNewWhereInput";
import { CompanyNewOrderByInput } from "./CompanyNewOrderByInput";

export type CompanyNewFindManyArgs = {
  where?: CompanyNewWhereInput;
  orderBy?: Array<CompanyNewOrderByInput>;
  skip?: number;
  take?: number;
};
