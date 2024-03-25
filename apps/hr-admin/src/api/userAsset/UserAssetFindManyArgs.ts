import { UserAssetWhereInput } from "./UserAssetWhereInput";
import { UserAssetOrderByInput } from "./UserAssetOrderByInput";

export type UserAssetFindManyArgs = {
  where?: UserAssetWhereInput;
  orderBy?: Array<UserAssetOrderByInput>;
  skip?: number;
  take?: number;
};
