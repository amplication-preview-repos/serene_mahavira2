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
import { UserTimeOffRequestWhereInput } from "./UserTimeOffRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserTimeOffRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserTimeOffRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTimeOffRequestWhereInput)
  @IsOptional()
  @Field(() => UserTimeOffRequestWhereInput, {
    nullable: true,
  })
  every?: UserTimeOffRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserTimeOffRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTimeOffRequestWhereInput)
  @IsOptional()
  @Field(() => UserTimeOffRequestWhereInput, {
    nullable: true,
  })
  some?: UserTimeOffRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserTimeOffRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTimeOffRequestWhereInput)
  @IsOptional()
  @Field(() => UserTimeOffRequestWhereInput, {
    nullable: true,
  })
  none?: UserTimeOffRequestWhereInput;
}
export { UserTimeOffRequestListRelationFilter as UserTimeOffRequestListRelationFilter };
