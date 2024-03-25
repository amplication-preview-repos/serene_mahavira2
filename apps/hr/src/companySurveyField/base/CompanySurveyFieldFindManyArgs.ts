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
import { CompanySurveyFieldWhereInput } from "./CompanySurveyFieldWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompanySurveyFieldOrderByInput } from "./CompanySurveyFieldOrderByInput";

@ArgsType()
class CompanySurveyFieldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanySurveyFieldWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompanySurveyFieldWhereInput, { nullable: true })
  @Type(() => CompanySurveyFieldWhereInput)
  where?: CompanySurveyFieldWhereInput;

  @ApiProperty({
    required: false,
    type: [CompanySurveyFieldOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompanySurveyFieldOrderByInput], { nullable: true })
  @Type(() => CompanySurveyFieldOrderByInput)
  orderBy?: Array<CompanySurveyFieldOrderByInput>;

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

export { CompanySurveyFieldFindManyArgs as CompanySurveyFieldFindManyArgs };