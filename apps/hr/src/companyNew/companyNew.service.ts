import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyNewServiceBase } from "./base/companyNew.service.base";

@Injectable()
export class CompanyNewService extends CompanyNewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
