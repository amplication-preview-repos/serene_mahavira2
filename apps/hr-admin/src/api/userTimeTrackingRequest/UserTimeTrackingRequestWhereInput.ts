import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";
import { UserTimeTrackingRequestDetailListRelationFilter } from "../userTimeTrackingRequestDetail/UserTimeTrackingRequestDetailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserTimeTrackingRequestWhereInput = {
  approvedAt?: DateTimeNullableFilter;
  approverInfo?: UserInfoWhereUniqueInput;
  details?: UserTimeTrackingRequestDetailListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  requestedAt?: DateTimeNullableFilter;
  requesterInfo?: UserInfoWhereUniqueInput;
  status?: IntNullableFilter;
};
