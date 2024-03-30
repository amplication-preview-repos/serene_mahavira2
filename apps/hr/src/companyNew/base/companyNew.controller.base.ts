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
import { CompanyNewService } from "../companyNew.service";
import { CompanyNewCreateInput } from "./CompanyNewCreateInput";
import { CompanyNew } from "./CompanyNew";
import { CompanyNewFindManyArgs } from "./CompanyNewFindManyArgs";
import { CompanyNewWhereUniqueInput } from "./CompanyNewWhereUniqueInput";
import { CompanyNewUpdateInput } from "./CompanyNewUpdateInput";

export class CompanyNewControllerBase {
  constructor(protected readonly service: CompanyNewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyNew })
  @swagger.ApiBody({
    type: CompanyNewCreateInput,
  })
  async createCompanyNew(
    @common.Body() data: CompanyNewCreateInput
  ): Promise<CompanyNew> {
    return await this.service.createCompanyNew({
      data: {
        ...data,

        userInfo: data.userInfo
          ? {
              connect: data.userInfo,
            }
          : undefined,
      },
      select: {
        content: true,
        id: true,
        imagePath: true,
        publishedDate: true,
        status: true,
        tags: true,
        title: true,

        userInfo: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyNew] })
  @ApiNestedQuery(CompanyNewFindManyArgs)
  async companyNews(@common.Req() request: Request): Promise<CompanyNew[]> {
    const args = plainToClass(CompanyNewFindManyArgs, request.query);
    return this.service.companyNews({
      ...args,
      select: {
        content: true,
        id: true,
        imagePath: true,
        publishedDate: true,
        status: true,
        tags: true,
        title: true,

        userInfo: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyNew })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async companyNew(
    @common.Param() params: CompanyNewWhereUniqueInput
  ): Promise<CompanyNew | null> {
    const result = await this.service.companyNew({
      where: params,
      select: {
        content: true,
        id: true,
        imagePath: true,
        publishedDate: true,
        status: true,
        tags: true,
        title: true,

        userInfo: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: CompanyNew })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CompanyNewUpdateInput,
  })
  async updateCompanyNew(
    @common.Param() params: CompanyNewWhereUniqueInput,
    @common.Body() data: CompanyNewUpdateInput
  ): Promise<CompanyNew | null> {
    try {
      return await this.service.updateCompanyNew({
        where: params,
        data: {
          ...data,

          userInfo: data.userInfo
            ? {
                connect: data.userInfo,
              }
            : undefined,
        },
        select: {
          content: true,
          id: true,
          imagePath: true,
          publishedDate: true,
          status: true,
          tags: true,
          title: true,

          userInfo: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: CompanyNew })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompanyNew(
    @common.Param() params: CompanyNewWhereUniqueInput
  ): Promise<CompanyNew | null> {
    try {
      return await this.service.deleteCompanyNew({
        where: params,
        select: {
          content: true,
          id: true,
          imagePath: true,
          publishedDate: true,
          status: true,
          tags: true,
          title: true,

          userInfo: {
            select: {
              id: true,
            },
          },
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
