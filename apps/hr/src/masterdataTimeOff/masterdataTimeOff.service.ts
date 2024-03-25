import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterdataTimeOffServiceBase } from "./base/masterdataTimeOff.service.base";

@Injectable()
export class MasterdataTimeOffService extends MasterdataTimeOffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
