import { SortOrder } from "../../util/SortOrder";

export type UserTimeTrackingRequestDetailOrderByInput = {
  date?: SortOrder;
  fromTime?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  numberHours?: SortOrder;
  timetracking_id?: SortOrder;
  toTime?: SortOrder;
};
