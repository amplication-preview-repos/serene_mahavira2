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
import { MasterdataTaskService } from "../masterdataTask.service";
import { MasterdataTaskCreateInput } from "./MasterdataTaskCreateInput";
import { MasterdataTask } from "./MasterdataTask";
import { MasterdataTaskFindManyArgs } from "./MasterdataTaskFindManyArgs";
import { MasterdataTaskWhereUniqueInput } from "./MasterdataTaskWhereUniqueInput";
import { MasterdataTaskUpdateInput } from "./MasterdataTaskUpdateInput";

export class MasterdataTaskControllerBase {
  constructor(protected readonly service: MasterdataTaskService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MasterdataTask })
  async createMasterdataTask(
    @common.Body() data: MasterdataTaskCreateInput
  ): Promise<MasterdataTask> {
    return await this.service.createMasterdataTask({
      data: data,
      select: {
        configField: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MasterdataTask] })
  @ApiNestedQuery(MasterdataTaskFindManyArgs)
  async masterdataTasks(
    @common.Req() request: Request
  ): Promise<MasterdataTask[]> {
    const args = plainToClass(MasterdataTaskFindManyArgs, request.query);
    return this.service.masterdataTasks({
      ...args,
      select: {
        configField: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MasterdataTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async masterdataTask(
    @common.Param() params: MasterdataTaskWhereUniqueInput
  ): Promise<MasterdataTask | null> {
    const result = await this.service.masterdataTask({
      where: params,
      select: {
        configField: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: MasterdataTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMasterdataTask(
    @common.Param() params: MasterdataTaskWhereUniqueInput,
    @common.Body() data: MasterdataTaskUpdateInput
  ): Promise<MasterdataTask | null> {
    try {
      return await this.service.updateMasterdataTask({
        where: params,
        data: data,
        select: {
          configField: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: MasterdataTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMasterdataTask(
    @common.Param() params: MasterdataTaskWhereUniqueInput
  ): Promise<MasterdataTask | null> {
    try {
      return await this.service.deleteMasterdataTask({
        where: params,
        select: {
          configField: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
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
