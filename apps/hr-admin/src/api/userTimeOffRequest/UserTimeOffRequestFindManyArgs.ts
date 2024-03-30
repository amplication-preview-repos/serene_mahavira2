import { UserTimeOffRequestWhereInput } from "./UserTimeOffRequestWhereInput";
import { UserTimeOffRequestOrderByInput } from "./UserTimeOffRequestOrderByInput";

export type UserTimeOffRequestFindManyArgs = {
  where?: UserTimeOffRequestWhereInput;
  orderBy?: Array<UserTimeOffRequestOrderByInput>;
  skip?: number;
  take?: number;
};
