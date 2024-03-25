import { UserNotification as TUserNotification } from "../api/userNotification/UserNotification";

export const USERNOTIFICATION_TITLE_FIELD = "title";

export const UserNotificationTitle = (record: TUserNotification): string => {
  return record.title?.toString() || String(record.id);
};
