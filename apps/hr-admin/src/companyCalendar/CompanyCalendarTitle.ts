import { CompanyCalendar as TCompanyCalendar } from "../api/companyCalendar/CompanyCalendar";

export const COMPANYCALENDAR_TITLE_FIELD = "name";

export const CompanyCalendarTitle = (record: TCompanyCalendar): string => {
  return record.name?.toString() || String(record.id);
};
