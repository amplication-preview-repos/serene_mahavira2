import { UserTimeOffRequest as TUserTimeOffRequest } from "../api/userTimeOffRequest/UserTimeOffRequest";

export const USERTIMEOFFREQUEST_TITLE_FIELD = "note";

export const UserTimeOffRequestTitle = (
  record: TUserTimeOffRequest
): string => {
  return record.note?.toString() || String(record.id);
};
