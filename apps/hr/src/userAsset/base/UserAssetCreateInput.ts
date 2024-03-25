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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { UserInfoWhereUniqueInput } from "../../userInfo/base/UserInfoWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class UserAssetCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assetId?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  status?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserInfoWhereUniqueInput)
  @IsOptional()
  @Field(() => UserInfoWhereUniqueInput, {
    nullable: true,
  })
  userInfo?: UserInfoWhereUniqueInput | null;
}

export { UserAssetCreateInput as UserAssetCreateInput };
