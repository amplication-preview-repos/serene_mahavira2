import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyJobWhereInput = {
  contractTypeId?: StringNullableFilter;
  department?: StringNullableFilter;
  descriptionJob?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  stages?: StringNullableFilter;
  title?: StringNullableFilter;
};
