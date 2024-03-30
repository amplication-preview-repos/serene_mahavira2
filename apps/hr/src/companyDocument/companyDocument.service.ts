import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyDocumentServiceBase } from "./base/companyDocument.service.base";

@Injectable()
export class CompanyDocumentService extends CompanyDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
