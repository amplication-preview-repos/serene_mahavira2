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
import { CompanyJobApplyWhereUniqueInput } from "./CompanyJobApplyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CompanyJobApplyUpdateInput } from "./CompanyJobApplyUpdateInput";

@ArgsType()
class UpdateCompanyJobApplyArgs {
  @ApiProperty({
    required: true,
    type: () => CompanyJobApplyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyJobApplyWhereUniqueInput)
  @Field(() => CompanyJobApplyWhereUniqueInput, { nullable: false })
  where!: CompanyJobApplyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CompanyJobApplyUpdateInput,
  })
  @ValidateNested()
  @Type(() => CompanyJobApplyUpdateInput)
  @Field(() => CompanyJobApplyUpdateInput, { nullable: false })
  data!: CompanyJobApplyUpdateInput;
}

export { UpdateCompanyJobApplyArgs as UpdateCompanyJobApplyArgs };