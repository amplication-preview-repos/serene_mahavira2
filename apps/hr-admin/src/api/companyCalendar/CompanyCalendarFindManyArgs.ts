import { CompanyCalendarWhereInput } from "./CompanyCalendarWhereInput";
import { CompanyCalendarOrderByInput } from "./CompanyCalendarOrderByInput";

export type CompanyCalendarFindManyArgs = {
  where?: CompanyCalendarWhereInput;
  orderBy?: Array<CompanyCalendarOrderByInput>;
  skip?: number;
  take?: number;
};
