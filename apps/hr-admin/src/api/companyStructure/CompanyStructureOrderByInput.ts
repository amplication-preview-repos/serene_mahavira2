import { SortOrder } from "../../util/SortOrder";

export type CompanyStructureOrderByInput = {
  code?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
};
