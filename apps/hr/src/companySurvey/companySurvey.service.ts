import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanySurveyServiceBase } from "./base/companySurvey.service.base";

@Injectable()
export class CompanySurveyService extends CompanySurveyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
