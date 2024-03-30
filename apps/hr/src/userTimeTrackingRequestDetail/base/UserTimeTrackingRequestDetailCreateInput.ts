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
import {
  IsDate,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { UserTimeTrackingRequestWhereUniqueInput } from "../../userTimeTrackingRequest/base/UserTimeTrackingRequestWhereUniqueInput";

@InputType()
class UserTimeTrackingRequestDetailCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fromTime?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberHours?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserTimeTrackingRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserTimeTrackingRequestWhereUniqueInput)
  @IsOptional()
  @Field(() => UserTimeTrackingRequestWhereUniqueInput, {
    nullable: true,
  })
  timetrackingInfo?: UserTimeTrackingRequestWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  toTime?: string | null;
}

export { UserTimeTrackingRequestDetailCreateInput as UserTimeTrackingRequestDetailCreateInput };
