import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type UserExpenseRequestWhereInput = {
  approvedAt?: DateTimeNullableFilter;
  approverInfo?: UserInfoWhereUniqueInput;
  attachments?: JsonFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  requestedAt?: DateTimeNullableFilter;
  requesterInfo?: UserInfoWhereUniqueInput;
  status?: IntNullableFilter;
  taxAmount?: FloatNullableFilter;
  title?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
