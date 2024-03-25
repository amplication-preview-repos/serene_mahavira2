/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserTimeOffRequestWhereUniqueInput } from "../../userTimeOffRequest/base/UserTimeOffRequestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserTimeOffRequestUpdateManyWithoutUserInfosInput {
  @Field(() => [UserTimeOffRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserTimeOffRequestWhereUniqueInput],
  })
  connect?: Array<UserTimeOffRequestWhereUniqueInput>;

  @Field(() => [UserTimeOffRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserTimeOffRequestWhereUniqueInput],
  })
  disconnect?: Array<UserTimeOffRequestWhereUniqueInput>;

  @Field(() => [UserTimeOffRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserTimeOffRequestWhereUniqueInput],
  })
  set?: Array<UserTimeOffRequestWhereUniqueInput>;
}

export { UserTimeOffRequestUpdateManyWithoutUserInfosInput as UserTimeOffRequestUpdateManyWithoutUserInfosInput };