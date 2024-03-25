import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "roleId";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.roleId?.toString() || String(record.id);
};
