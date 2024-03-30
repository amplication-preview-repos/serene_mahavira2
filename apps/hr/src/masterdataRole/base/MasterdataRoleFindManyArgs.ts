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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MasterdataRoleOrderByInput } from "./MasterdataRoleOrderByInput";

@ArgsType()
class MasterdataRoleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MasterdataRoleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MasterdataRoleWhereInput, { nullable: true })
  @Type(() => MasterdataRoleWhereInput)
  where?: MasterdataRoleWhereInput;

  @ApiProperty({
    required: false,
    type: [MasterdataRoleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MasterdataRoleOrderByInput], { nullable: true })
  @Type(() => MasterdataRoleOrderByInput)
  orderBy?: Array<MasterdataRoleOrderByInput>;

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

export { MasterdataRoleFindManyArgs as MasterdataRoleFindManyArgs };
