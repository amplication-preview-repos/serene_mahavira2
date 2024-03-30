import { SortOrder } from "../../util/SortOrder";

export type MasterdataAssetOrderByInput = {
  code?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  remainingAsset?: SortOrder;
  totalAsset?: SortOrder;
};
