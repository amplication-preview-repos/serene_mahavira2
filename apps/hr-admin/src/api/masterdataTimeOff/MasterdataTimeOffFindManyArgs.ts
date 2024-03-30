import { MasterdataTimeOffWhereInput } from "./MasterdataTimeOffWhereInput";
import { MasterdataTimeOffOrderByInput } from "./MasterdataTimeOffOrderByInput";

export type MasterdataTimeOffFindManyArgs = {
  where?: MasterdataTimeOffWhereInput;
  orderBy?: Array<MasterdataTimeOffOrderByInput>;
  skip?: number;
  take?: number;
};
