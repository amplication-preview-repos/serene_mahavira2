import { MasterdataAsset as TMasterdataAsset } from "../api/masterdataAsset/MasterdataAsset";

export const MASTERDATAASSET_TITLE_FIELD = "name";

export const MasterdataAssetTitle = (record: TMasterdataAsset): string => {
  return record.name?.toString() || String(record.id);
};
