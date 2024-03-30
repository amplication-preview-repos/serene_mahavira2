import { UserTimeTrackingRequestWhereUniqueInput } from "../userTimeTrackingRequest/UserTimeTrackingRequestWhereUniqueInput";

export type UserTimeTrackingRequestDetailCreateInput = {
  date?: Date | null;
  fromTime?: string | null;
  note?: string | null;
  numberHours?: number | null;
  timetrackingInfo?: UserTimeTrackingRequestWhereUniqueInput | null;
  toTime?: string | null;
};
