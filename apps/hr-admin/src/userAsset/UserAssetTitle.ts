import { UserAsset as TUserAsset } from "../api/userAsset/UserAsset";

export const USERASSET_TITLE_FIELD = "assetId";

export const UserAssetTitle = (record: TUserAsset): string => {
  return record.assetId?.toString() || String(record.id);
};
