/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CompanyCalendarWhereUniqueInput } from "../../companyCalendar/base/CompanyCalendarWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CompanyCalendarUpdateManyWithoutUserInfosInput {
  @Field(() => [CompanyCalendarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanyCalendarWhereUniqueInput],
  })
  connect?: Array<CompanyCalendarWhereUniqueInput>;

  @Field(() => [CompanyCalendarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanyCalendarWhereUniqueInput],
  })
  disconnect?: Array<CompanyCalendarWhereUniqueInput>;

  @Field(() => [CompanyCalendarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanyCalendarWhereUniqueInput],
  })
  set?: Array<CompanyCalendarWhereUniqueInput>;
}

export { CompanyCalendarUpdateManyWithoutUserInfosInput as CompanyCalendarUpdateManyWithoutUserInfosInput };
