import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserRoleWhereInput = {
  id?: StringFilter;
  roleId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
