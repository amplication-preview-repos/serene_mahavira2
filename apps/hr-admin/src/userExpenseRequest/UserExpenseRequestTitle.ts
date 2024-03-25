import { UserExpenseRequest as TUserExpenseRequest } from "../api/userExpenseRequest/UserExpenseRequest";

export const USEREXPENSEREQUEST_TITLE_FIELD = "title";

export const UserExpenseRequestTitle = (
  record: TUserExpenseRequest
): string => {
  return record.title?.toString() || String(record.id);
};
