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
import { MasterdataRoleWhereInput } from "./MasterdataRoleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MasterdataRoleCountArgs {
  @ApiProperty({
    required: false,
    type: () => MasterdataRoleWhereInput,
  })
  @Field(() => MasterdataRoleWhereInput, { nullable: true })
  @Type(() => MasterdataRoleWhereInput)
  where?: MasterdataRoleWhereInput;
}

export { MasterdataRoleCountArgs as MasterdataRoleCountArgs };
