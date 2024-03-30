import { InputJsonValue } from "../../types";

export type MasterdataTaskCreateInput = {
  configField?: InputJsonValue;
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
};
