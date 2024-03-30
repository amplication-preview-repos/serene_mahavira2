import { SortOrder } from "../../util/SortOrder";

export type UserTimeTrackingRequestOrderByInput = {
  approvedAt?: SortOrder;
  approver_id?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  requestedAt?: SortOrder;
  requester_id?: SortOrder;
  status?: SortOrder;
};
