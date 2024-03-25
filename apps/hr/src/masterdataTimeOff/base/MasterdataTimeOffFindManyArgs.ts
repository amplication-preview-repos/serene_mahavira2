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
import { MasterdataTimeOffWhereInput } from "./MasterdataTimeOffWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MasterdataTimeOffOrderByInput } from "./MasterdataTimeOffOrderByInput";

@ArgsType()
class MasterdataTimeOffFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MasterdataTimeOffWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MasterdataTimeOffWhereInput, { nullable: true })
  @Type(() => MasterdataTimeOffWhereInput)
  where?: MasterdataTimeOffWhereInput;

  @ApiProperty({
    required: false,
    type: [MasterdataTimeOffOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MasterdataTimeOffOrderByInput], { nullable: true })
  @Type(() => MasterdataTimeOffOrderByInput)
  orderBy?: Array<MasterdataTimeOffOrderByInput>;

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

export { MasterdataTimeOffFindManyArgs as MasterdataTimeOffFindManyArgs };