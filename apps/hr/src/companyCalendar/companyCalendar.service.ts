import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyCalendarServiceBase } from "./base/companyCalendar.service.base";

@Injectable()
export class CompanyCalendarService extends CompanyCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
