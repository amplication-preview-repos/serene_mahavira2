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
import { UserTimeTrackingRequestDetailWhereInput } from "./UserTimeTrackingRequestDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserTimeTrackingRequestDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserTimeTrackingRequestDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTimeTrackingRequestDetailWhereInput)
  @IsOptional()
  @Field(() => UserTimeTrackingRequestDetailWhereInput, {
    nullable: true,
  })
  every?: UserTimeTrackingRequestDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserTimeTrackingRequestDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTimeTrackingRequestDetailWhereInput)
  @IsOptional()
  @Field(() => UserTimeTrackingRequestDetailWhereInput, {
    nullable: true,
  })
  some?: UserTimeTrackingRequestDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserTimeTrackingRequestDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => UserTimeTrackingRequestDetailWhereInput)
  @IsOptional()
  @Field(() => UserTimeTrackingRequestDetailWhereInput, {
    nullable: true,
  })
  none?: UserTimeTrackingRequestDetailWhereInput;
}
export { UserTimeTrackingRequestDetailListRelationFilter as UserTimeTrackingRequestDetailListRelationFilter };
