import { InputJsonValue } from "../../types";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type CompanyCalendarCreateInput = {
  calendarType?: number | null;
  configNotify?: InputJsonValue;
  duration?: number | null;
  endDate?: Date | null;
  location?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  note?: string | null;
  startDate?: Date | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
