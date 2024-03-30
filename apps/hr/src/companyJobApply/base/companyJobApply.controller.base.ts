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
import { CompanyJobApplyService } from "../companyJobApply.service";
import { CompanyJobApplyCreateInput } from "./CompanyJobApplyCreateInput";
import { CompanyJobApply } from "./CompanyJobApply";
import { CompanyJobApplyFindManyArgs } from "./CompanyJobApplyFindManyArgs";
import { CompanyJobApplyWhereUniqueInput } from "./CompanyJobApplyWhereUniqueInput";
import { CompanyJobApplyUpdateInput } from "./CompanyJobApplyUpdateInput";

export class CompanyJobApplyControllerBase {
  constructor(protected readonly service: CompanyJobApplyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyJobApply })
  @swagger.ApiBody({
    type: CompanyJobApplyCreateInput,
  })
  async createCompanyJobApply(
    @common.Body() data: CompanyJobApplyCreateInput
  ): Promise<CompanyJobApply> {
    return await this.service.createCompanyJobApply({
      data: data,
      select: {
        address: true,
        companyJobId: true,
        email: true,
        fullName: true,
        id: true,
        phone: true,
        resumePath: true,
        status: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyJobApply] })
  @ApiNestedQuery(CompanyJobApplyFindManyArgs)
  async companyJobApplies(
    @common.Req() request: Request
  ): Promise<CompanyJobApply[]> {
    const args = plainToClass(CompanyJobApplyFindManyArgs, request.query);
    return this.service.companyJobApplies({
      ...args,
      select: {
        address: true,
        companyJobId: true,
        email: true,
        fullName: true,
        id: true,
        phone: true,
        resumePath: true,
        status: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyJobApply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async companyJobApply(
    @common.Param() params: CompanyJobApplyWhereUniqueInput
  ): Promise<CompanyJobApply | null> {
    const result = await this.service.companyJobApply({
      where: params,
      select: {
        address: true,
        companyJobId: true,
        email: true,
        fullName: true,
        id: true,
        phone: true,
        resumePath: true,
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
  @swagger.ApiOkResponse({ type: CompanyJobApply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CompanyJobApplyUpdateInput,
  })
  async updateCompanyJobApply(
    @common.Param() params: CompanyJobApplyWhereUniqueInput,
    @common.Body() data: CompanyJobApplyUpdateInput
  ): Promise<CompanyJobApply | null> {
    try {
      return await this.service.updateCompanyJobApply({
        where: params,
        data: data,
        select: {
          address: true,
          companyJobId: true,
          email: true,
          fullName: true,
          id: true,
          phone: true,
          resumePath: true,
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
  @swagger.ApiOkResponse({ type: CompanyJobApply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompanyJobApply(
    @common.Param() params: CompanyJobApplyWhereUniqueInput
  ): Promise<CompanyJobApply | null> {
    try {
      return await this.service.deleteCompanyJobApply({
        where: params,
        select: {
          address: true,
          companyJobId: true,
          email: true,
          fullName: true,
          id: true,
          phone: true,
          resumePath: true,
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
}
