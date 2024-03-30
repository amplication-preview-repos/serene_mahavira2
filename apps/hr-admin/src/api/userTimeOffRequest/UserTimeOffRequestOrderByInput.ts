import { SortOrder } from "../../util/SortOrder";

export type UserTimeOffRequestOrderByInput = {
  approver_id?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  numDays?: SortOrder;
  periodEnd?: SortOrder;
  periodStart?: SortOrder;
  status?: SortOrder;
  user_id?: SortOrder;
};
