import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterdataTaskServiceBase } from "./base/masterdataTask.service.base";

@Injectable()
export class MasterdataTaskService extends MasterdataTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
