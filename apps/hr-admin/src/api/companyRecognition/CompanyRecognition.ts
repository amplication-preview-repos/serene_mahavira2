import { UserInfo } from "../userInfo/UserInfo";

export type CompanyRecognition = {
  description: string | null;
  id: string;
  requesterInfo?: UserInfo | null;
  title: string | null;
  userInfo?: UserInfo | null;
};
