import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTimeTrackingRequestDetailServiceBase } from "./base/userTimeTrackingRequestDetail.service.base";

@Injectable()
export class UserTimeTrackingRequestDetailService extends UserTimeTrackingRequestDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
