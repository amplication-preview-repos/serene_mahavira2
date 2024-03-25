import { SortOrder } from "../../util/SortOrder";

export type UserSurveyResponseOrderByInput = {
  survey_id?: SortOrder;
  id?: SortOrder;
  responseJson?: SortOrder;
  submittedAt?: SortOrder;
  user_id?: SortOrder;
};
