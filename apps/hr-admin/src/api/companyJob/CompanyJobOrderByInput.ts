import { SortOrder } from "../../util/SortOrder";

export type CompanyJobOrderByInput = {
  contractTypeId?: SortOrder;
  department?: SortOrder;
  descriptionJob?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  stages?: SortOrder;
  title?: SortOrder;
};
