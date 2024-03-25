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
import { CompanyJobApplyWhereInput } from "./CompanyJobApplyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompanyJobApplyOrderByInput } from "./CompanyJobApplyOrderByInput";

@ArgsType()
class CompanyJobApplyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanyJobApplyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompanyJobApplyWhereInput, { nullable: true })
  @Type(() => CompanyJobApplyWhereInput)
  where?: CompanyJobApplyWhereInput;

  @ApiProperty({
    required: false,
    type: [CompanyJobApplyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompanyJobApplyOrderByInput], { nullable: true })
  @Type(() => CompanyJobApplyOrderByInput)
  orderBy?: Array<CompanyJobApplyOrderByInput>;

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

export { CompanyJobApplyFindManyArgs as CompanyJobApplyFindManyArgs };