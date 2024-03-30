import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyStructureServiceBase } from "./base/companyStructure.service.base";

@Injectable()
export class CompanyStructureService extends CompanyStructureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
