import { MasterdataTask as TMasterdataTask } from "../api/masterdataTask/MasterdataTask";

export const MASTERDATATASK_TITLE_FIELD = "name";

export const MasterdataTaskTitle = (record: TMasterdataTask): string => {
  return record.name?.toString() || String(record.id);
};
