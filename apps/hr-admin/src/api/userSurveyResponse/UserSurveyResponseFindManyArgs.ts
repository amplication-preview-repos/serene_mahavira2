import { UserSurveyResponseWhereInput } from "./UserSurveyResponseWhereInput";
import { UserSurveyResponseOrderByInput } from "./UserSurveyResponseOrderByInput";

export type UserSurveyResponseFindManyArgs = {
  where?: UserSurveyResponseWhereInput;
  orderBy?: Array<UserSurveyResponseOrderByInput>;
  skip?: number;
  take?: number;
};
