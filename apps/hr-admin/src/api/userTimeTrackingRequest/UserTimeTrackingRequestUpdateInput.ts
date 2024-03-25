import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";
import { UserTimeTrackingRequestDetailUpdateManyWithoutUserTimeTrackingRequestsInput } from "./UserTimeTrackingRequestDetailUpdateManyWithoutUserTimeTrackingRequestsInput";

export type UserTimeTrackingRequestUpdateInput = {
  approvedAt?: Date | null;
  approverInfo?: UserInfoWhereUniqueInput | null;
  details?: UserTimeTrackingRequestDetailUpdateManyWithoutUserTimeTrackingRequestsInput;
  name?: string | null;
  requestedAt?: Date | null;
  requesterInfo?: UserInfoWhereUniqueInput | null;
  status?: number | null;
};
