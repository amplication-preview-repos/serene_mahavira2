import { UserInfo } from "../userInfo/UserInfo";
import { JsonValue } from "type-fest";

export type UserExpenseRequest = {
  approvedAt: Date | null;
  approverInfo?: UserInfo | null;
  attachments: JsonValue;
  category: string | null;
  id: string;
  note: string | null;
  purchaseDate: Date | null;
  requestedAt: Date | null;
  requesterInfo?: UserInfo | null;
  status: number | null;
  taxAmount: number | null;
  title: string | null;
  totalAmount: number | null;
};
