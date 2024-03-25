import { UserInfo } from "../userInfo/UserInfo";

export type UserTimeOffRequest = {
  approverInfo?: UserInfo | null;
  id: string;
  note: string | null;
  numDays: number | null;
  periodEnd: Date | null;
  periodStart: Date | null;
  status: number | null;
  userInfo?: UserInfo | null;
};
