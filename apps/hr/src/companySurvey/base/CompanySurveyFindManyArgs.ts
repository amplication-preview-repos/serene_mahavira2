/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanySurveyWhereInput } from "./CompanySurveyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompanySurveyOrderByInput } from "./CompanySurveyOrderByInput";

@ArgsType()
class CompanySurveyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanySurveyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompanySurveyWhereInput, { nullable: true })
  @Type(() => CompanySurveyWhereInput)
  where?: CompanySurveyWhereInput;

  @ApiProperty({
    required: false,
    type: [CompanySurveyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompanySurveyOrderByInput], { nullable: true })
  @Type(() => CompanySurveyOrderByInput)
  orderBy?: Array<CompanySurveyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CompanySurveyFindManyArgs as CompanySurveyFindManyArgs };