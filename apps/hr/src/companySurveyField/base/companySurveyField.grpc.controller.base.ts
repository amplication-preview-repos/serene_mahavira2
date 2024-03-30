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
import { CompanySurveyFieldService } from "../companySurveyField.service";
import { CompanySurveyFieldCreateInput } from "./CompanySurveyFieldCreateInput";
import { CompanySurveyFieldWhereInput } from "./CompanySurveyFieldWhereInput";
import { CompanySurveyFieldWhereUniqueInput } from "./CompanySurveyFieldWhereUniqueInput";
import { CompanySurveyFieldFindManyArgs } from "./CompanySurveyFieldFindManyArgs";
import { CompanySurveyFieldUpdateInput } from "./CompanySurveyFieldUpdateInput";
import { CompanySurveyField } from "./CompanySurveyField";

export class CompanySurveyFieldGrpcControllerBase {
  constructor(protected readonly service: CompanySurveyFieldService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanySurveyField })
  @GrpcMethod("CompanySurveyFieldService", "createCompanySurveyField")
  async createCompanySurveyField(
    @common.Body() data: CompanySurveyFieldCreateInput
  ): Promise<CompanySurveyField> {
    return await this.service.createCompanySurveyField({
      data: {
        ...data,

        companySurvey: data.companySurvey
          ? {
              connect: data.companySurvey,
            }
          : undefined,
      },
      select: {
        companySurvey: {
          select: {
            id: true,
          },
        },

        fieldConfig: true,
        fieldType: true,
        id: true,
        isRequired: true,
        label: true,
        position: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanySurveyField] })
  @ApiNestedQuery(CompanySurveyFieldFindManyArgs)
  @GrpcMethod("CompanySurveyFieldService", "companySurveyFields")
  async companySurveyFields(
    @common.Req() request: Request
  ): Promise<CompanySurveyField[]> {
    const args = plainToClass(CompanySurveyFieldFindManyArgs, request.query);
    return this.service.companySurveyFields({
      ...args,
      select: {
        companySurvey: {
          select: {
            id: true,
          },
        },

        fieldConfig: true,
        fieldType: true,
        id: true,
        isRequired: true,
        label: true,
        position: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanySurveyField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanySurveyFieldService", "companySurveyField")
  async companySurveyField(
    @common.Param() params: CompanySurveyFieldWhereUniqueInput
  ): Promise<CompanySurveyField | null> {
    const result = await this.service.companySurveyField({
      where: params,
      select: {
        companySurvey: {
          select: {
            id: true,
          },
        },

        fieldConfig: true,
        fieldType: true,
        id: true,
        isRequired: true,
        label: true,
        position: true,
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
  @swagger.ApiOkResponse({ type: CompanySurveyField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanySurveyFieldService", "updateCompanySurveyField")
  async updateCompanySurveyField(
    @common.Param() params: CompanySurveyFieldWhereUniqueInput,
    @common.Body() data: CompanySurveyFieldUpdateInput
  ): Promise<CompanySurveyField | null> {
    try {
      return await this.service.updateCompanySurveyField({
        where: params,
        data: {
          ...data,

          companySurvey: data.companySurvey
            ? {
                connect: data.companySurvey,
              }
            : undefined,
        },
        select: {
          companySurvey: {
            select: {
              id: true,
            },
          },

          fieldConfig: true,
          fieldType: true,
          id: true,
          isRequired: true,
          label: true,
          position: true,
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
  @swagger.ApiOkResponse({ type: CompanySurveyField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanySurveyFieldService", "deleteCompanySurveyField")
  async deleteCompanySurveyField(
    @common.Param() params: CompanySurveyFieldWhereUniqueInput
  ): Promise<CompanySurveyField | null> {
    try {
      return await this.service.deleteCompanySurveyField({
        where: params,
        select: {
          companySurvey: {
            select: {
              id: true,
            },
          },

          fieldConfig: true,
          fieldType: true,
          id: true,
          isRequired: true,
          label: true,
          position: true,
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
