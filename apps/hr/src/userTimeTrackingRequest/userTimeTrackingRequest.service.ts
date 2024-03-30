import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTimeTrackingRequestServiceBase } from "./base/userTimeTrackingRequest.service.base";

@Injectable()
export class UserTimeTrackingRequestService extends UserTimeTrackingRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
