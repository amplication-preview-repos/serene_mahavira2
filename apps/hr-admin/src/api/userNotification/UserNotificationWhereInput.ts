import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserNotificationWhereInput = {
  content?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  title?: StringNullableFilter;
  userId?: StringNullableFilter;
};
