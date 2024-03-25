import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type CompanyRecognitionUpdateInput = {
  description?: string | null;
  requesterInfo?: UserInfoWhereUniqueInput | null;
  title?: string | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
