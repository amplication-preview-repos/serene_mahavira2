import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTimeOffRequestServiceBase } from "./base/userTimeOffRequest.service.base";

@Injectable()
export class UserTimeOffRequestService extends UserTimeOffRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
