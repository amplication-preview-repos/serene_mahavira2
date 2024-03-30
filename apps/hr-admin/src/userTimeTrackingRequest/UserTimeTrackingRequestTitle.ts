import { UserTimeTrackingRequest as TUserTimeTrackingRequest } from "../api/userTimeTrackingRequest/UserTimeTrackingRequest";

export const USERTIMETRACKINGREQUEST_TITLE_FIELD = "name";

export const UserTimeTrackingRequestTitle = (
  record: TUserTimeTrackingRequest
): string => {
  return record.name?.toString() || String(record.id);
};
