import { InputJsonValue } from "../../types";

export type MasterdataTaskUpdateInput = {
  configField?: InputJsonValue;
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
};
