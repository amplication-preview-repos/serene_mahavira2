import { UserInfoWhereInput } from "./UserInfoWhereInput";
import { UserInfoOrderByInput } from "./UserInfoOrderByInput";

export type UserInfoFindManyArgs = {
  where?: UserInfoWhereInput;
  orderBy?: Array<UserInfoOrderByInput>;
  skip?: number;
  take?: number;
};
