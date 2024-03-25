import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserTimeOffRequestUpdateInput = {
  approverInfo?: UserInfoWhereUniqueInput | null;
  note?: string | null;
  numDays?: number | null;
  periodEnd?: Date | null;
  periodStart?: Date | null;
  status?: number | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
