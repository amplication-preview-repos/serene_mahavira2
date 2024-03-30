import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserTimeOffRequestWhereInput = {
  approverInfo?: UserInfoWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  numDays?: IntNullableFilter;
  periodEnd?: DateTimeNullableFilter;
  periodStart?: DateTimeNullableFilter;
  status?: IntNullableFilter;
  userInfo?: UserInfoWhereUniqueInput;
};
