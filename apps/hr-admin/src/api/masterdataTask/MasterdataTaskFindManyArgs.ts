import { MasterdataTaskWhereInput } from "./MasterdataTaskWhereInput";
import { MasterdataTaskOrderByInput } from "./MasterdataTaskOrderByInput";

export type MasterdataTaskFindManyArgs = {
  where?: MasterdataTaskWhereInput;
  orderBy?: Array<MasterdataTaskOrderByInput>;
  skip?: number;
  take?: number;
};
