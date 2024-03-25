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
import { UserNotificationService } from "../userNotification.service";
import { UserNotificationCreateInput } from "./UserNotificationCreateInput";
import { UserNotification } from "./UserNotification";
import { UserNotificationFindManyArgs } from "./UserNotificationFindManyArgs";
import { UserNotificationWhereUniqueInput } from "./UserNotificationWhereUniqueInput";
import { UserNotificationUpdateInput } from "./UserNotificationUpdateInput";

export class UserNotificationControllerBase {
  constructor(protected readonly service: UserNotificationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserNotification })
  async createUserNotification(
    @common.Body() data: UserNotificationCreateInput
  ): Promise<UserNotification> {
    return await this.service.createUserNotification({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        isRead: true,
        title: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserNotification] })
  @ApiNestedQuery(UserNotificationFindManyArgs)
  async userNotifications(
    @common.Req() request: Request
  ): Promise<UserNotification[]> {
    const args = plainToClass(UserNotificationFindManyArgs, request.query);
    return this.service.userNotifications({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        isRead: true,
        title: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserNotification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userNotification(
    @common.Param() params: UserNotificationWhereUniqueInput
  ): Promise<UserNotification | null> {
    const result = await this.service.userNotification({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        isRead: true,
        title: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: UserNotification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserNotification(
    @common.Param() params: UserNotificationWhereUniqueInput,
    @common.Body() data: UserNotificationUpdateInput
  ): Promise<UserNotification | null> {
    try {
      return await this.service.updateUserNotification({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          isRead: true,
          title: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: UserNotification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserNotification(
    @common.Param() params: UserNotificationWhereUniqueInput
  ): Promise<UserNotification | null> {
    try {
      return await this.service.deleteUserNotification({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          isRead: true,
          title: true,
          userId: true,
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
