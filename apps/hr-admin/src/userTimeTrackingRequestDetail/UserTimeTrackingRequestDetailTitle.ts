import { UserTimeTrackingRequestDetail as TUserTimeTrackingRequestDetail } from "../api/userTimeTrackingRequestDetail/UserTimeTrackingRequestDetail";

export const USERTIMETRACKINGREQUESTDETAIL_TITLE_FIELD = "fromTime";

export const UserTimeTrackingRequestDetailTitle = (
  record: TUserTimeTrackingRequestDetail
): string => {
  return record.fromTime?.toString() || String(record.id);
};
