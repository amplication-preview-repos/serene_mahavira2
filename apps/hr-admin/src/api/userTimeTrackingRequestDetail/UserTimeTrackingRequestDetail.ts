import { UserTimeTrackingRequest } from "../userTimeTrackingRequest/UserTimeTrackingRequest";

export type UserTimeTrackingRequestDetail = {
  date: Date | null;
  fromTime: string | null;
  id: string;
  note: string | null;
  numberHours: number | null;
  timetrackingInfo?: UserTimeTrackingRequest | null;
  toTime: string | null;
};
