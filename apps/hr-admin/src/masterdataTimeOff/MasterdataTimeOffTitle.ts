import { MasterdataTimeOff as TMasterdataTimeOff } from "../api/masterdataTimeOff/MasterdataTimeOff";

export const MASTERDATATIMEOFF_TITLE_FIELD = "name";

export const MasterdataTimeOffTitle = (record: TMasterdataTimeOff): string => {
  return record.name?.toString() || String(record.id);
};
