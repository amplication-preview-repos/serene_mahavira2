import { SortOrder } from "../../util/SortOrder";

export type CompanyDocumentOrderByInput = {
  description?: SortOrder;
  fileSize?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  path?: SortOrder;
  publishedAt?: SortOrder;
};
