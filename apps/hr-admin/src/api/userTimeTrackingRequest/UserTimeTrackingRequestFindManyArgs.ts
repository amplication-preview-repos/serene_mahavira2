import { UserTimeTrackingRequestWhereInput } from "./UserTimeTrackingRequestWhereInput";
import { UserTimeTrackingRequestOrderByInput } from "./UserTimeTrackingRequestOrderByInput";

export type UserTimeTrackingRequestFindManyArgs = {
  where?: UserTimeTrackingRequestWhereInput;
  orderBy?: Array<UserTimeTrackingRequestOrderByInput>;
  skip?: number;
  take?: number;
};
