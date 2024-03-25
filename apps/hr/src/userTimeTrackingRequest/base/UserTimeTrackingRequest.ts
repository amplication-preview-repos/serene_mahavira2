/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { UserInfo } from "../../userInfo/base/UserInfo";
import { UserTimeTrackingRequestDetail } from "../../userTimeTrackingRequestDetail/base/UserTimeTrackingRequestDetail";

@ObjectType()
class UserTimeTrackingRequest {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  approvedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserInfo,
  })
  @ValidateNested()
  @Type(() => UserInfo)
  @IsOptional()
  approverInfo?: UserInfo | null;

  @ApiProperty({
    required: false,
    type: () => [UserTimeTrackingRequestDetail],
  })
  @ValidateNested()
  @Type(() => UserTimeTrackingRequestDetail)
  @IsOptional()
  details?: Array<UserTimeTrackingRequestDetail>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  requestedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserInfo,
  })
  @ValidateNested()
  @Type(() => UserInfo)
  @IsOptional()
  requesterInfo?: UserInfo | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  status!: number | null;
}

export { UserTimeTrackingRequest as UserTimeTrackingRequest };
