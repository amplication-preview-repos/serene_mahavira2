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
import { UserTimeTrackingRequestDetailService } from "../userTimeTrackingRequestDetail.service";
import { UserTimeTrackingRequestDetailCreateInput } from "./UserTimeTrackingRequestDetailCreateInput";
import { UserTimeTrackingRequestDetailWhereInput } from "./UserTimeTrackingRequestDetailWhereInput";
import { UserTimeTrackingRequestDetailWhereUniqueInput } from "./UserTimeTrackingRequestDetailWhereUniqueInput";
import { UserTimeTrackingRequestDetailFindManyArgs } from "./UserTimeTrackingRequestDetailFindManyArgs";
import { UserTimeTrackingRequestDetailUpdateInput } from "./UserTimeTrackingRequestDetailUpdateInput";
import { UserTimeTrackingRequestDetail } from "./UserTimeTrackingRequestDetail";

export class UserTimeTrackingRequestDetailGrpcControllerBase {
  constructor(
    protected readonly service: UserTimeTrackingRequestDetailService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserTimeTrackingRequestDetail })
  @GrpcMethod(
    "UserTimeTrackingRequestDetailService",
    "createUserTimeTrackingRequestDetail"
  )
  async createUserTimeTrackingRequestDetail(
    @common.Body() data: UserTimeTrackingRequestDetailCreateInput
  ): Promise<UserTimeTrackingRequestDetail> {
    return await this.service.createUserTimeTrackingRequestDetail({
      data: {
        ...data,

        timetrackingInfo: data.timetrackingInfo
          ? {
              connect: data.timetrackingInfo,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserTimeTrackingRequestDetail] })
  @ApiNestedQuery(UserTimeTrackingRequestDetailFindManyArgs)
  @GrpcMethod(
    "UserTimeTrackingRequestDetailService",
    "userTimeTrackingRequestDetails"
  )
  async userTimeTrackingRequestDetails(
    @common.Req() request: Request
  ): Promise<UserTimeTrackingRequestDetail[]> {
    const args = plainToClass(
      UserTimeTrackingRequestDetailFindManyArgs,
      request.query
    );
    return this.service.userTimeTrackingRequestDetails({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserTimeTrackingRequestDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "UserTimeTrackingRequestDetailService",
    "userTimeTrackingRequestDetail"
  )
  async userTimeTrackingRequestDetail(
    @common.Param() params: UserTimeTrackingRequestDetailWhereUniqueInput
  ): Promise<UserTimeTrackingRequestDetail | null> {
    const result = await this.service.userTimeTrackingRequestDetail({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserTimeTrackingRequestDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "UserTimeTrackingRequestDetailService",
    "updateUserTimeTrackingRequestDetail"
  )
  async updateUserTimeTrackingRequestDetail(
    @common.Param() params: UserTimeTrackingRequestDetailWhereUniqueInput,
    @common.Body() data: UserTimeTrackingRequestDetailUpdateInput
  ): Promise<UserTimeTrackingRequestDetail | null> {
    try {
      return await this.service.updateUserTimeTrackingRequestDetail({
        where: params,
        data: {
          ...data,

          timetrackingInfo: data.timetrackingInfo
            ? {
                connect: data.timetrackingInfo,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: UserTimeTrackingRequestDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "UserTimeTrackingRequestDetailService",
    "deleteUserTimeTrackingRequestDetail"
  )
  async deleteUserTimeTrackingRequestDetail(
    @common.Param() params: UserTimeTrackingRequestDetailWhereUniqueInput
  ): Promise<UserTimeTrackingRequestDetail | null> {
    try {
      return await this.service.deleteUserTimeTrackingRequestDetail({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
