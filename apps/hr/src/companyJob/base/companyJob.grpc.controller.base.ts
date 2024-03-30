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
import { CompanyJobService } from "../companyJob.service";
import { CompanyJobCreateInput } from "./CompanyJobCreateInput";
import { CompanyJobWhereInput } from "./CompanyJobWhereInput";
import { CompanyJobWhereUniqueInput } from "./CompanyJobWhereUniqueInput";
import { CompanyJobFindManyArgs } from "./CompanyJobFindManyArgs";
import { CompanyJobUpdateInput } from "./CompanyJobUpdateInput";
import { CompanyJob } from "./CompanyJob";

export class CompanyJobGrpcControllerBase {
  constructor(protected readonly service: CompanyJobService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyJob })
  @GrpcMethod("CompanyJobService", "createCompanyJob")
  async createCompanyJob(
    @common.Body() data: CompanyJobCreateInput
  ): Promise<CompanyJob> {
    return await this.service.createCompanyJob({
      data: data,
      select: {
        contractTypeId: true,
        department: true,
        descriptionJob: true,
        id: true,
        location: true,
        stages: true,
        title: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyJob] })
  @ApiNestedQuery(CompanyJobFindManyArgs)
  @GrpcMethod("CompanyJobService", "companyJobs")
  async companyJobs(@common.Req() request: Request): Promise<CompanyJob[]> {
    const args = plainToClass(CompanyJobFindManyArgs, request.query);
    return this.service.companyJobs({
      ...args,
      select: {
        contractTypeId: true,
        department: true,
        descriptionJob: true,
        id: true,
        location: true,
        stages: true,
        title: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyJob })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyJobService", "companyJob")
  async companyJob(
    @common.Param() params: CompanyJobWhereUniqueInput
  ): Promise<CompanyJob | null> {
    const result = await this.service.companyJob({
      where: params,
      select: {
        contractTypeId: true,
        department: true,
        descriptionJob: true,
        id: true,
        location: true,
        stages: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: CompanyJob })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyJobService", "updateCompanyJob")
  async updateCompanyJob(
    @common.Param() params: CompanyJobWhereUniqueInput,
    @common.Body() data: CompanyJobUpdateInput
  ): Promise<CompanyJob | null> {
    try {
      return await this.service.updateCompanyJob({
        where: params,
        data: data,
        select: {
          contractTypeId: true,
          department: true,
          descriptionJob: true,
          id: true,
          location: true,
          stages: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: CompanyJob })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyJobService", "deleteCompanyJob")
  async deleteCompanyJob(
    @common.Param() params: CompanyJobWhereUniqueInput
  ): Promise<CompanyJob | null> {
    try {
      return await this.service.deleteCompanyJob({
        where: params,
        select: {
          contractTypeId: true,
          department: true,
          descriptionJob: true,
          id: true,
          location: true,
          stages: true,
          title: true,
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
