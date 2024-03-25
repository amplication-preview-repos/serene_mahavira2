import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CompanyDocumentWhereInput = {
  description?: StringNullableFilter;
  fileSize?: BigIntNullableFilter;
  fileType?: StringNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  path?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
};
