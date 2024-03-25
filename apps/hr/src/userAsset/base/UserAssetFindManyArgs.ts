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
import { UserAssetWhereInput } from "./UserAssetWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserAssetOrderByInput } from "./UserAssetOrderByInput";

@ArgsType()
class UserAssetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserAssetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserAssetWhereInput, { nullable: true })
  @Type(() => UserAssetWhereInput)
  where?: UserAssetWhereInput;

  @ApiProperty({
    required: false,
    type: [UserAssetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserAssetOrderByInput], { nullable: true })
  @Type(() => UserAssetOrderByInput)
  orderBy?: Array<UserAssetOrderByInput>;

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

export { UserAssetFindManyArgs as UserAssetFindManyArgs };