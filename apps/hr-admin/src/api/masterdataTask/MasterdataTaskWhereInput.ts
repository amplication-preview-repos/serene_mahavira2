import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MasterdataTaskWhereInput = {
  configField?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
