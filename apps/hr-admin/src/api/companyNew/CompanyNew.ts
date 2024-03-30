import { UserInfo } from "../userInfo/UserInfo";

export type CompanyNew = {
  content: string | null;
  id: string;
  imagePath: string | null;
  publishedDate: Date | null;
  status: number | null;
  tags: string | null;
  title: string | null;
  userInfo?: UserInfo | null;
};
