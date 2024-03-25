import { UserInfo } from "../userInfo/UserInfo";
import { UserTimeTrackingRequestDetail } from "../userTimeTrackingRequestDetail/UserTimeTrackingRequestDetail";

export type UserTimeTrackingRequest = {
  approvedAt: Date | null;
  approverInfo?: UserInfo | null;
  details?: Array<UserTimeTrackingRequestDetail>;
  id: string;
  name: string | null;
  requestedAt: Date | null;
  requesterInfo?: UserInfo | null;
  status: number | null;
};
