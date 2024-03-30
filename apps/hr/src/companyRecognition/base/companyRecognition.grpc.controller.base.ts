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
import { CompanyRecognitionService } from "../companyRecognition.service";
import { CompanyRecognitionCreateInput } from "./CompanyRecognitionCreateInput";
import { CompanyRecognitionWhereInput } from "./CompanyRecognitionWhereInput";
import { CompanyRecognitionWhereUniqueInput } from "./CompanyRecognitionWhereUniqueInput";
import { CompanyRecognitionFindManyArgs } from "./CompanyRecognitionFindManyArgs";
import { CompanyRecognitionUpdateInput } from "./CompanyRecognitionUpdateInput";
import { CompanyRecognition } from "./CompanyRecognition";

export class CompanyRecognitionGrpcControllerBase {
  constructor(protected readonly service: CompanyRecognitionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyRecognition })
  @GrpcMethod("CompanyRecognitionService", "createCompanyRecognition")
  async createCompanyRecognition(
    @common.Body() data: CompanyRecognitionCreateInput
  ): Promise<CompanyRecognition> {
    return await this.service.createCompanyRecognition({
      data: {
        ...data,

        requesterInfo: data.requesterInfo
          ? {
              connect: data.requesterInfo,
            }
          : undefined,

        userInfo: data.userInfo
          ? {
              connect: data.userInfo,
            }
          : undefined,
      },
      select: {
        description: true,
        id: true,

        requesterInfo: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: [CompanyRecognition] })
  @ApiNestedQuery(CompanyRecognitionFindManyArgs)
  @GrpcMethod("CompanyRecognitionService", "companyRecognitions")
  async companyRecognitions(
    @common.Req() request: Request
  ): Promise<CompanyRecognition[]> {
    const args = plainToClass(CompanyRecognitionFindManyArgs, request.query);
    return this.service.companyRecognitions({
      ...args,
      select: {
        description: true,
        id: true,

        requesterInfo: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: CompanyRecognition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyRecognitionService", "companyRecognition")
  async companyRecognition(
    @common.Param() params: CompanyRecognitionWhereUniqueInput
  ): Promise<CompanyRecognition | null> {
    const result = await this.service.companyRecognition({
      where: params,
      select: {
        description: true,
        id: true,

        requesterInfo: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: CompanyRecognition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyRecognitionService", "updateCompanyRecognition")
  async updateCompanyRecognition(
    @common.Param() params: CompanyRecognitionWhereUniqueInput,
    @common.Body() data: CompanyRecognitionUpdateInput
  ): Promise<CompanyRecognition | null> {
    try {
      return await this.service.updateCompanyRecognition({
        where: params,
        data: {
          ...data,

          requesterInfo: data.requesterInfo
            ? {
                connect: data.requesterInfo,
              }
            : undefined,

          userInfo: data.userInfo
            ? {
                connect: data.userInfo,
              }
            : undefined,
        },
        select: {
          description: true,
          id: true,

          requesterInfo: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: CompanyRecognition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyRecognitionService", "deleteCompanyRecognition")
  async deleteCompanyRecognition(
    @common.Param() params: CompanyRecognitionWhereUniqueInput
  ): Promise<CompanyRecognition | null> {
    try {
      return await this.service.deleteCompanyRecognition({
        where: params,
        select: {
          description: true,
          id: true,

          requesterInfo: {
            select: {
              id: true,
            },
          },

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
