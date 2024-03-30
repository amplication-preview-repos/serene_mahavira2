import { UserInfo as TUserInfo } from "../api/userInfo/UserInfo";

export const USERINFO_TITLE_FIELD = "firstName";

export const UserInfoTitle = (record: TUserInfo): string => {
  return record.firstName?.toString() || String(record.id);
};
