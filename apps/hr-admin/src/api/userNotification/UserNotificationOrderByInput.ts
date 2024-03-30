import { SortOrder } from "../../util/SortOrder";

export type UserNotificationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  title?: SortOrder;
  userId?: SortOrder;
};
