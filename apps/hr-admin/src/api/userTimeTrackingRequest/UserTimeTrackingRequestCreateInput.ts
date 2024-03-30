import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";
import { UserTimeTrackingRequestDetailCreateNestedManyWithoutUserTimeTrackingRequestsInput } from "./UserTimeTrackingRequestDetailCreateNestedManyWithoutUserTimeTrackingRequestsInput";

export type UserTimeTrackingRequestCreateInput = {
  approvedAt?: Date | null;
  approverInfo?: UserInfoWhereUniqueInput | null;
  details?: UserTimeTrackingRequestDetailCreateNestedManyWithoutUserTimeTrackingRequestsInput;
  name?: string | null;
  requestedAt?: Date | null;
  requesterInfo?: UserInfoWhereUniqueInput | null;
  status?: number | null;
};
