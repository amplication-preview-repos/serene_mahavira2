/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanySurveyFieldListRelationFilter } from "../../companySurveyField/base/CompanySurveyFieldListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserSurveyResponseListRelationFilter } from "../../userSurveyResponse/base/UserSurveyResponseListRelationFilter";

@InputType()
class CompanySurveyWhereInput {
  @ApiProperty({
    required: false,
    type: () => CompanySurveyFieldListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CompanySurveyFieldListRelationFilter)
  @IsOptional()
  @Field(() => CompanySurveyFieldListRelationFilter, {
    nullable: true,
  })
  companySurveyFields?: CompanySurveyFieldListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserSurveyResponseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserSurveyResponseListRelationFilter)
  @IsOptional()
  @Field(() => UserSurveyResponseListRelationFilter, {
    nullable: true,
  })
  userSurveyResponse?: UserSurveyResponseListRelationFilter;
}

export { CompanySurveyWhereInput as CompanySurveyWhereInput };