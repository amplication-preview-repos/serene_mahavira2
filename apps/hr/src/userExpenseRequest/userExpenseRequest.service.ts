import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserExpenseRequestServiceBase } from "./base/userExpenseRequest.service.base";

@Injectable()
export class UserExpenseRequestService extends UserExpenseRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
