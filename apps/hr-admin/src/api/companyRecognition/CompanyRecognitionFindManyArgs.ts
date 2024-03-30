import { CompanyRecognitionWhereInput } from "./CompanyRecognitionWhereInput";
import { CompanyRecognitionOrderByInput } from "./CompanyRecognitionOrderByInput";

export type CompanyRecognitionFindManyArgs = {
  where?: CompanyRecognitionWhereInput;
  orderBy?: Array<CompanyRecognitionOrderByInput>;
  skip?: number;
  take?: number;
};
