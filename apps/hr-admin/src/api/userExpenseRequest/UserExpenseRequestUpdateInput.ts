import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserExpenseRequestUpdateInput = {
  approvedAt?: Date | null;
  approverInfo?: UserInfoWhereUniqueInput | null;
  attachments?: InputJsonValue;
  category?: string | null;
  note?: string | null;
  purchaseDate?: Date | null;
  requestedAt?: Date | null;
  requesterInfo?: UserInfoWhereUniqueInput | null;
  status?: number | null;
  taxAmount?: number | null;
  title?: string | null;
  totalAmount?: number | null;
};
