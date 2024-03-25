import { SortOrder } from "../../util/SortOrder";

export type UserExpenseRequestOrderByInput = {
  approvedAt?: SortOrder;
  approver_id?: SortOrder;
  attachments?: SortOrder;
  category?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  purchaseDate?: SortOrder;
  requestedAt?: SortOrder;
  requester_id?: SortOrder;
  status?: SortOrder;
  taxAmount?: SortOrder;
  title?: SortOrder;
  totalAmount?: SortOrder;
};
