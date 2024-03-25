import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserTimeTrackingRequestWhereUniqueInput } from "../userTimeTrackingRequest/UserTimeTrackingRequestWhereUniqueInput";

export type UserTimeTrackingRequestDetailWhereInput = {
  date?: DateTimeNullableFilter;
  fromTime?: StringNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  numberHours?: IntNullableFilter;
  timetrackingInfo?: UserTimeTrackingRequestWhereUniqueInput;
  toTime?: StringNullableFilter;
};
