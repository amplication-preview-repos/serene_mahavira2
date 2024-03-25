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
import { UserInfoWhereUniqueInput } from "./UserInfoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserInfoUpdateInput } from "./UserInfoUpdateInput";

@ArgsType()
class UpdateUserInfoArgs {
  @ApiProperty({
    required: true,
    type: () => UserInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserInfoWhereUniqueInput)
  @Field(() => UserInfoWhereUniqueInput, { nullable: false })
  where!: UserInfoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserInfoUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserInfoUpdateInput)
  @Field(() => UserInfoUpdateInput, { nullable: false })
  data!: UserInfoUpdateInput;
}

export { UpdateUserInfoArgs as UpdateUserInfoArgs };
