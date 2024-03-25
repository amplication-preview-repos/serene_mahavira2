import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";

export type MasterdataAssetWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  remainingAsset?: BigIntNullableFilter;
  totalAsset?: BigIntNullableFilter;
};
