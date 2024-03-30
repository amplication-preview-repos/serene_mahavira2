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
import { MasterdataRoleService } from "../masterdataRole.service";
import { MasterdataRoleCreateInput } from "./MasterdataRoleCreateInput";
import { MasterdataRoleWhereInput } from "./MasterdataRoleWhereInput";
import { MasterdataRoleWhereUniqueInput } from "./MasterdataRoleWhereUniqueInput";
import { MasterdataRoleFindManyArgs } from "./MasterdataRoleFindManyArgs";
import { MasterdataRoleUpdateInput } from "./MasterdataRoleUpdateInput";
import { MasterdataRole } from "./MasterdataRole";

export class MasterdataRoleGrpcControllerBase {
  constructor(protected readonly service: MasterdataRoleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MasterdataRole })
  @GrpcMethod("MasterdataRoleService", "createMasterdataRole")
  async createMasterdataRole(
    @common.Body() data: MasterdataRoleCreateInput
  ): Promise<MasterdataRole> {
    return await this.service.createMasterdataRole({
      data: data,
      select: {
        code: true,
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MasterdataRole] })
  @ApiNestedQuery(MasterdataRoleFindManyArgs)
  @GrpcMethod("MasterdataRoleService", "masterdataRoles")
  async masterdataRoles(
    @common.Req() request: Request
  ): Promise<MasterdataRole[]> {
    const args = plainToClass(MasterdataRoleFindManyArgs, request.query);
    return this.service.masterdataRoles({
      ...args,
      select: {
        code: true,
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MasterdataRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MasterdataRoleService", "masterdataRole")
  async masterdataRole(
    @common.Param() params: MasterdataRoleWhereUniqueInput
  ): Promise<MasterdataRole | null> {
    const result = await this.service.masterdataRole({
      where: params,
      select: {
        code: true,
        description: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: MasterdataRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MasterdataRoleService", "updateMasterdataRole")
  async updateMasterdataRole(
    @common.Param() params: MasterdataRoleWhereUniqueInput,
    @common.Body() data: MasterdataRoleUpdateInput
  ): Promise<MasterdataRole | null> {
    try {
      return await this.service.updateMasterdataRole({
        where: params,
        data: data,
        select: {
          code: true,
          description: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: MasterdataRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MasterdataRoleService", "deleteMasterdataRole")
  async deleteMasterdataRole(
    @common.Param() params: MasterdataRoleWhereUniqueInput
  ): Promise<MasterdataRole | null> {
    try {
      return await this.service.deleteMasterdataRole({
        where: params,
        select: {
          code: true,
          description: true,
          id: true,
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
