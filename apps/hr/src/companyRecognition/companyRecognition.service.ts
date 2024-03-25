import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyRecognitionServiceBase } from "./base/companyRecognition.service.base";

@Injectable()
export class CompanyRecognitionService extends CompanyRecognitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
