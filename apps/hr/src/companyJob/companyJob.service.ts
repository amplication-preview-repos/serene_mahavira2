import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyJobServiceBase } from "./base/companyJob.service.base";

@Injectable()
export class CompanyJobService extends CompanyJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
