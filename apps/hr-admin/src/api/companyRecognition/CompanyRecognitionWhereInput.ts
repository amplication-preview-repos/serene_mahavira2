import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type CompanyRecognitionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  requesterInfo?: UserInfoWhereUniqueInput;
  title?: StringNullableFilter;
  userInfo?: UserInfoWhereUniqueInput;
};
