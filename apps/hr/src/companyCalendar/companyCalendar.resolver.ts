import * as graphql from "@nestjs/graphql";
import { CompanyCalendarResolverBase } from "./base/companyCalendar.resolver.base";
import { CompanyCalendar } from "./base/CompanyCalendar";
import { CompanyCalendarService } from "./companyCalendar.service";

@graphql.Resolver(() => CompanyCalendar)
export class CompanyCalendarResolver extends CompanyCalendarResolverBase {
  constructor(protected readonly service: CompanyCalendarService) {
    super(service);
  }
}
