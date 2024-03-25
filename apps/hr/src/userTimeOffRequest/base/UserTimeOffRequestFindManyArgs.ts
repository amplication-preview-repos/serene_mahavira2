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
import { UserTimeOffRequestWhereInput } from "./UserTimeOffRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserTimeOffRequestOrderByInput } from "./UserTimeOffRequestOrderByInput";

@ArgsType()
class UserTimeOffRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserTimeOffRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserTimeOffRequestWhereInput, { nullable: true })
  @Type(() => UserTimeOffRequestWhereInput)
  where?: UserTimeOffRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [UserTimeOffRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserTimeOffRequestOrderByInput], { nullable: true })
  @Type(() => UserTimeOffRequestOrderByInput)
  orderBy?: Array<UserTimeOffRequestOrderByInput>;

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

export { UserTimeOffRequestFindManyArgs as UserTimeOffRequestFindManyArgs };