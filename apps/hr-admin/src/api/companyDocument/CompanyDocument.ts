export type CompanyDocument = {
  description: string | null;
  fileSize: bigint | null;
  fileType: string | null;
  id: bigint;
  name: string;
  path: string | null;
  publishedAt: Date | null;
};
