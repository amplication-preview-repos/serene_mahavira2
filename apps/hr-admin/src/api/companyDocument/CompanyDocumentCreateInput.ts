export type CompanyDocumentCreateInput = {
  description?: string | null;
  fileSize?: bigint | null;
  fileType?: string | null;
  name: string;
  path?: string | null;
  publishedAt?: Date | null;
};
