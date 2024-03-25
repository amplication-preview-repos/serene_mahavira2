import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterdataRoleServiceBase } from "./base/masterdataRole.service.base";

@Injectable()
export class MasterdataRoleService extends MasterdataRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
