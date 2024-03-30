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
import { MasterdataTimeOffService } from "../masterdataTimeOff.service";
import { MasterdataTimeOffCreateInput } from "./MasterdataTimeOffCreateInput";
import { MasterdataTimeOff } from "./MasterdataTimeOff";
import { MasterdataTimeOffFindManyArgs } from "./MasterdataTimeOffFindManyArgs";
import { MasterdataTimeOffWhereUniqueInput } from "./MasterdataTimeOffWhereUniqueInput";
import { MasterdataTimeOffUpdateInput } from "./MasterdataTimeOffUpdateInput";

export class MasterdataTimeOffControllerBase {
  constructor(protected readonly service: MasterdataTimeOffService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MasterdataTimeOff })
  @swagger.ApiBody({
    type: MasterdataTimeOffCreateInput,
  })
  async createMasterdataTimeOff(
    @common.Body() data: MasterdataTimeOffCreateInput
  ): Promise<MasterdataTimeOff> {
    return await this.service.createMasterdataTimeOff({
      data: data,
      select: {
        code: true,
        description: true,
        icon: true,
        id: true,
        isActive: true,
        name: true,
        totalDays: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MasterdataTimeOff] })
  @ApiNestedQuery(MasterdataTimeOffFindManyArgs)
  async masterdataTimeOffs(
    @common.Req() request: Request
  ): Promise<MasterdataTimeOff[]> {
    const args = plainToClass(MasterdataTimeOffFindManyArgs, request.query);
    return this.service.masterdataTimeOffs({
      ...args,
      select: {
        code: true,
        description: true,
        icon: true,
        id: true,
        isActive: true,
        name: true,
        totalDays: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MasterdataTimeOff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async masterdataTimeOff(
    @common.Param() params: MasterdataTimeOffWhereUniqueInput
  ): Promise<MasterdataTimeOff | null> {
    const result = await this.service.masterdataTimeOff({
      where: params,
      select: {
        code: true,
        description: true,
        icon: true,
        id: true,
        isActive: true,
        name: true,
        totalDays: true,
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
  @swagger.ApiOkResponse({ type: MasterdataTimeOff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: MasterdataTimeOffUpdateInput,
  })
  async updateMasterdataTimeOff(
    @common.Param() params: MasterdataTimeOffWhereUniqueInput,
    @common.Body() data: MasterdataTimeOffUpdateInput
  ): Promise<MasterdataTimeOff | null> {
    try {
      return await this.service.updateMasterdataTimeOff({
        where: params,
        data: data,
        select: {
          code: true,
          description: true,
          icon: true,
          id: true,
          isActive: true,
          name: true,
          totalDays: true,
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
  @swagger.ApiOkResponse({ type: MasterdataTimeOff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMasterdataTimeOff(
    @common.Param() params: MasterdataTimeOffWhereUniqueInput
  ): Promise<MasterdataTimeOff | null> {
    try {
      return await this.service.deleteMasterdataTimeOff({
        where: params,
        select: {
          code: true,
          description: true,
          icon: true,
          id: true,
          isActive: true,
          name: true,
          totalDays: true,
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
