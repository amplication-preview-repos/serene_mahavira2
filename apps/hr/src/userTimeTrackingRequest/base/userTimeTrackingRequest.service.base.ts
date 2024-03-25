/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserTimeTrackingRequest, // @ts-ignore
  UserTimeTrackingRequestDetail, // @ts-ignore
  UserInfo,
} from "@prisma/client";

export class UserTimeTrackingRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserTimeTrackingRequestCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserTimeTrackingRequestCountArgs>
  ): Promise<number> {
    return this.prisma.userTimeTrackingRequest.count(args);
  }

  async userTimeTrackingRequests<
    T extends Prisma.UserTimeTrackingRequestFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserTimeTrackingRequestFindManyArgs>
  ): Promise<UserTimeTrackingRequest[]> {
    return this.prisma.userTimeTrackingRequest.findMany(args);
  }
  async userTimeTrackingRequest<
    T extends Prisma.UserTimeTrackingRequestFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserTimeTrackingRequestFindUniqueArgs>
  ): Promise<UserTimeTrackingRequest | null> {
    return this.prisma.userTimeTrackingRequest.findUnique(args);
  }
  async createUserTimeTrackingRequest<
    T extends Prisma.UserTimeTrackingRequestCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserTimeTrackingRequestCreateArgs>
  ): Promise<UserTimeTrackingRequest> {
    return this.prisma.userTimeTrackingRequest.create<T>(args);
  }
  async updateUserTimeTrackingRequest<
    T extends Prisma.UserTimeTrackingRequestUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserTimeTrackingRequestUpdateArgs>
  ): Promise<UserTimeTrackingRequest> {
    return this.prisma.userTimeTrackingRequest.update<T>(args);
  }
  async deleteUserTimeTrackingRequest<
    T extends Prisma.UserTimeTrackingRequestDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserTimeTrackingRequestDeleteArgs>
  ): Promise<UserTimeTrackingRequest> {
    return this.prisma.userTimeTrackingRequest.delete(args);
  }

  async findDetails(
    parentId: string,
    args: Prisma.UserTimeTrackingRequestDetailFindManyArgs
  ): Promise<UserTimeTrackingRequestDetail[]> {
    return this.prisma.userTimeTrackingRequest
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .details(args);
  }

  async getApproverInfo(parentId: string): Promise<UserInfo | null> {
    return this.prisma.userTimeTrackingRequest
      .findUnique({
        where: { id: parentId },
      })
      .approverInfo();
  }

  async getRequesterInfo(parentId: string): Promise<UserInfo | null> {
    return this.prisma.userTimeTrackingRequest
      .findUnique({
        where: { id: parentId },
      })
      .requesterInfo();
  }
}