import { CompanySurveyWhereInput } from "./CompanySurveyWhereInput";
import { CompanySurveyOrderByInput } from "./CompanySurveyOrderByInput";

export type CompanySurveyFindManyArgs = {
  where?: CompanySurveyWhereInput;
  orderBy?: Array<CompanySurveyOrderByInput>;
  skip?: number;
  take?: number;
};
