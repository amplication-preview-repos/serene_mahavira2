import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CompanyJobApplyWhereInput = {
  address?: StringNullableFilter;
  companyJobId?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  resumePath?: StringNullableFilter;
  status?: IntNullableFilter;
};
