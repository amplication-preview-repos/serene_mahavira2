import { MasterdataAssetWhereInput } from "./MasterdataAssetWhereInput";
import { MasterdataAssetOrderByInput } from "./MasterdataAssetOrderByInput";

export type MasterdataAssetFindManyArgs = {
  where?: MasterdataAssetWhereInput;
  orderBy?: Array<MasterdataAssetOrderByInput>;
  skip?: number;
  take?: number;
};
