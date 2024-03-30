import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MasterdataTimeOffWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  totalDays?: IntNullableFilter;
};
