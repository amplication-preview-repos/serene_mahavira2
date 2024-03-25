import { Module } from "@nestjs/common";
import { CompanyCalendarModuleBase } from "./base/companyCalendar.module.base";
import { CompanyCalendarService } from "./companyCalendar.service";
import { CompanyCalendarController } from "./companyCalendar.controller";
import { CompanyCalendarResolver } from "./companyCalendar.resolver";

@Module({
  imports: [CompanyCalendarModuleBase],
  controllers: [CompanyCalendarController],
  providers: [CompanyCalendarService, CompanyCalendarResolver],
  exports: [CompanyCalendarService],
})
export class CompanyCalendarModule {}
