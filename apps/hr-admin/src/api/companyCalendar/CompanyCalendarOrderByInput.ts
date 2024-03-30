import { SortOrder } from "../../util/SortOrder";

export type CompanyCalendarOrderByInput = {
  calendarType?: SortOrder;
  configNotify?: SortOrder;
  duration?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  members?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  startDate?: SortOrder;
  hoster_id?: SortOrder;
};
