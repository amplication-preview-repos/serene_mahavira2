import { JsonValue } from "type-fest";

export type MasterdataTask = {
  configField: JsonValue;
  description: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
};
