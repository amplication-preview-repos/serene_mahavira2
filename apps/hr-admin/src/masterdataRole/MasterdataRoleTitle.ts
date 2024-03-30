import { MasterdataRole as TMasterdataRole } from "../api/masterdataRole/MasterdataRole";

export const MASTERDATAROLE_TITLE_FIELD = "name";

export const MasterdataRoleTitle = (record: TMasterdataRole): string => {
  return record.name?.toString() || String(record.id);
};
