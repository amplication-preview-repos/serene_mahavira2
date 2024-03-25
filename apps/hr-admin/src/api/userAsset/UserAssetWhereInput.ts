import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserAssetWhereInput = {
  assetId?: StringNullableFilter;
  id?: StringFilter;
  status?: IntNullableFilter;
  userInfo?: UserInfoWhereUniqueInput;
};
