import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type CompanyCalendarWhereInput = {
  calendarType?: IntNullableFilter;
  configNotify?: JsonFilter;
  duration?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  members?: JsonFilter;
  name?: StringNullableFilter;
  note?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  userInfo?: UserInfoWhereUniqueInput;
};
