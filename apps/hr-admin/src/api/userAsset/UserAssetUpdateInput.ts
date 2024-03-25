import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserAssetUpdateInput = {
  assetId?: string | null;
  status?: number | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
