import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyJobApplyServiceBase } from "./base/companyJobApply.service.base";

@Injectable()
export class CompanyJobApplyService extends CompanyJobApplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
