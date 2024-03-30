import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type CompanyNewWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  imagePath?: StringNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  status?: IntNullableFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
  userInfo?: UserInfoWhereUniqueInput;
};
