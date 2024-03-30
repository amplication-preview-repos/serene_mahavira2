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
import { CompanyRecognitionWhereUniqueInput } from "./CompanyRecognitionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CompanyRecognitionUpdateInput } from "./CompanyRecognitionUpdateInput";

@ArgsType()
class UpdateCompanyRecognitionArgs {
  @ApiProperty({
    required: true,
    type: () => CompanyRecognitionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyRecognitionWhereUniqueInput)
  @Field(() => CompanyRecognitionWhereUniqueInput, { nullable: false })
  where!: CompanyRecognitionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CompanyRecognitionUpdateInput,
  })
  @ValidateNested()
  @Type(() => CompanyRecognitionUpdateInput)
  @Field(() => CompanyRecognitionUpdateInput, { nullable: false })
  data!: CompanyRecognitionUpdateInput;
}

export { UpdateCompanyRecognitionArgs as UpdateCompanyRecognitionArgs };
