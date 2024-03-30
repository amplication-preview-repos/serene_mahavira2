import { UserInfo } from "../userInfo/UserInfo";

export type UserAsset = {
  assetId: string | null;
  id: string;
  status: number | null;
  userInfo?: UserInfo | null;
};
