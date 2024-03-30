import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type UserAssetCreateInput = {
  assetId?: string | null;
  status?: number | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
