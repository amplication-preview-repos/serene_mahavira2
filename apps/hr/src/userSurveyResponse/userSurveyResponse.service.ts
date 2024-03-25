import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSurveyResponseServiceBase } from "./base/userSurveyResponse.service.base";

@Injectable()
export class UserSurveyResponseService extends UserSurveyResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
