import { UserSurveyResponse as TUserSurveyResponse } from "../api/userSurveyResponse/UserSurveyResponse";

export const USERSURVEYRESPONSE_TITLE_FIELD = "id";

export const UserSurveyResponseTitle = (
  record: TUserSurveyResponse
): string => {
  return record.id?.toString() || String(record.id);
};
