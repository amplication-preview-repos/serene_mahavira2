import { SortOrder } from "../../util/SortOrder";

export type CompanyJobApplyOrderByInput = {
  address?: SortOrder;
  companyJobId?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  resumePath?: SortOrder;
  status?: SortOrder;
};
