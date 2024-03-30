/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { UserTimeTrackingRequestService } from "../userTimeTrackingRequest.service";
import { UserTimeTrackingRequestCreateInput } from "./UserTimeTrackingRequestCreateInput";
import { UserTimeTrackingRequestWhereInput } from "./UserTimeTrackingRequestWhereInput";
import { UserTimeTrackingRequestWhereUniqueInput } from "./UserTimeTrackingRequestWhereUniqueInput";
import { UserTimeTrackingRequestFindManyArgs } from "./UserTimeTrackingRequestFindManyArgs";
import { UserTimeTrackingRequestUpdateInput } from "./UserTimeTrackingRequestUpdateInput";
import { UserTimeTrackingRequest } from "./UserTimeTrackingRequest";
import { UserTimeTrackingRequestDetailFindManyArgs } from "../../userTimeTrackingRequestDetail/base/UserTimeTrackingRequestDetailFindManyArgs";
import { UserTimeTrackingRequestDetail } from "../../userTimeTrackingRequestDetail/base/UserTimeTrackingRequestDetail";
import { UserTimeTrackingRequestDetailWhereUniqueInput } from "../../userTimeTrackingRequestDetail/base/UserTimeTrackingRequestDetailWhereUniqueInput";

export class UserTimeTrackingRequestGrpcControllerBase {
  constructor(protected readonly service: UserTimeTrackingRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserTimeTrackingRequest })
  @GrpcMethod("UserTimeTrackingRequestService", "createUserTimeTrackingRequest")
  async createUserTimeTrackingRequest(
    @common.Body() data: UserTimeTrackingRequestCreateInput
  ): Promise<UserTimeTrackingRequest> {
    return await this.service.createUserTimeTrackingRequest({
      data: {
        ...data,

        approverInfo: data.approverInfo
          ? {
              connect: data.approverInfo,
            }
          : undefined,

        requesterInfo: data.requesterInfo
          ? {
              connect: data.requesterInfo,
            }
          : undefined,
      },
      select: {
        approvedAt: true,

        approverInfo: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        requestedAt: true,

        requesterInfo: {
          select: {
            id: true,
          },
        },

        status: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserTimeTrackingRequest] })
  @ApiNestedQuery(UserTimeTrackingRequestFindManyArgs)
  @GrpcMethod("UserTimeTrackingRequestService", "userTimeTrackingRequests")
  async userTimeTrackingRequests(
    @common.Req() request: Request
  ): Promise<UserTimeTrackingRequest[]> {
    const args = plainToClass(
      UserTimeTrackingRequestFindManyArgs,
      request.query
    );
    return this.service.userTimeTrackingRequests({
      ...args,
      select: {
        approvedAt: true,

        approverInfo: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        requestedAt: true,

        requesterInfo: {
          select: {
            id: true,
          },
        },

        status: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserTimeTrackingRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserTimeTrackingRequestService", "userTimeTrackingRequest")
  async userTimeTrackingRequest(
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput
  ): Promise<UserTimeTrackingRequest | null> {
    const result = await this.service.userTimeTrackingRequest({
      where: params,
      select: {
        approvedAt: true,

        approverInfo: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        requestedAt: true,

        requesterInfo: {
          select: {
            id: true,
          },
        },

        status: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserTimeTrackingRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserTimeTrackingRequestService", "updateUserTimeTrackingRequest")
  async updateUserTimeTrackingRequest(
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput,
    @common.Body() data: UserTimeTrackingRequestUpdateInput
  ): Promise<UserTimeTrackingRequest | null> {
    try {
      return await this.service.updateUserTimeTrackingRequest({
        where: params,
        data: {
          ...data,

          approverInfo: data.approverInfo
            ? {
                connect: data.approverInfo,
              }
            : undefined,

          requesterInfo: data.requesterInfo
            ? {
                connect: data.requesterInfo,
              }
            : undefined,
        },
        select: {
          approvedAt: true,

          approverInfo: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          requestedAt: true,

          requesterInfo: {
            select: {
              id: true,
            },
          },

          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserTimeTrackingRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserTimeTrackingRequestService", "deleteUserTimeTrackingRequest")
  async deleteUserTimeTrackingRequest(
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput
  ): Promise<UserTimeTrackingRequest | null> {
    try {
      return await this.service.deleteUserTimeTrackingRequest({
        where: params,
        select: {
          approvedAt: true,

          approverInfo: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          requestedAt: true,

          requesterInfo: {
            select: {
              id: true,
            },
          },

          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/details")
  @ApiNestedQuery(UserTimeTrackingRequestDetailFindManyArgs)
  @GrpcMethod("UserTimeTrackingRequestService", "findManyDetails")
  async findManyDetails(
    @common.Req() request: Request,
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput
  ): Promise<UserTimeTrackingRequestDetail[]> {
    const query = plainToClass(
      UserTimeTrackingRequestDetailFindManyArgs,
      request.query
    );
    const results = await this.service.findDetails(params.id, {
      ...query,
      select: {
        date: true,
        fromTime: true,
        id: true,
        note: true,
        numberHours: true,

        timetrackingInfo: {
          select: {
            id: true,
          },
        },

        toTime: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/details")
  @GrpcMethod("UserTimeTrackingRequestService", "connectDetails")
  async connectDetails(
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput,
    @common.Body() body: UserTimeTrackingRequestDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      details: {
        connect: body,
      },
    };
    await this.service.updateUserTimeTrackingRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/details")
  @GrpcMethod("UserTimeTrackingRequestService", "updateDetails")
  async updateDetails(
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput,
    @common.Body() body: UserTimeTrackingRequestDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      details: {
        set: body,
      },
    };
    await this.service.updateUserTimeTrackingRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/details")
  @GrpcMethod("UserTimeTrackingRequestService", "disconnectDetails")
  async disconnectDetails(
    @common.Param() params: UserTimeTrackingRequestWhereUniqueInput,
    @common.Body() body: UserTimeTrackingRequestDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      details: {
        disconnect: body,
      },
    };
    await this.service.updateUserTimeTrackingRequest({
      where: params,
      data,
      select: { id: true },
    });
  }
}
