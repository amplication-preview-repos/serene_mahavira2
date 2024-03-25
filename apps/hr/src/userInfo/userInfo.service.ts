import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInfoServiceBase } from "./base/userInfo.service.base";

@Injectable()
export class UserInfoService extends UserInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
