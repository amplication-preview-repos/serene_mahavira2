import { JsonValue } from "type-fest";
import { UserInfo } from "../userInfo/UserInfo";

export type CompanyCalendar = {
  calendarType: number | null;
  configNotify: JsonValue;
  duration: number | null;
  endDate: Date | null;
  id: string;
  location: string | null;
  members: JsonValue;
  name: string | null;
  note: string | null;
  startDate: Date | null;
  userInfo?: UserInfo | null;
};
