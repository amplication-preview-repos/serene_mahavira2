import { UserInfoWhereUniqueInput } from "../userInfo/UserInfoWhereUniqueInput";

export type CompanyNewUpdateInput = {
  content?: string | null;
  imagePath?: string | null;
  publishedDate?: Date | null;
  status?: number | null;
  tags?: string | null;
  title?: string | null;
  userInfo?: UserInfoWhereUniqueInput | null;
};
