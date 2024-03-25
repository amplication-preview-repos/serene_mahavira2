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
import { CompanyCalendarService } from "../companyCalendar.service";
import { CompanyCalendarCreateInput } from "./CompanyCalendarCreateInput";
import { CompanyCalendar } from "./CompanyCalendar";
import { CompanyCalendarFindManyArgs } from "./CompanyCalendarFindManyArgs";
import { CompanyCalendarWhereUniqueInput } from "./CompanyCalendarWhereUniqueInput";
import { CompanyCalendarUpdateInput } from "./CompanyCalendarUpdateInput";

export class CompanyCalendarControllerBase {
  constructor(protected readonly service: CompanyCalendarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyCalendar })
  async createCompanyCalendar(
    @common.Body() data: CompanyCalendarCreateInput
  ): Promise<CompanyCalendar> {
    return await this.service.createCompanyCalendar({
      data: {
        ...data,

        userInfo: data.userInfo
          ? {
              connect: data.userInfo,
            }
          : undefined,
      },
      select: {
        calendarType: true,
        configNotify: true,
        duration: true,
        endDate: true,
        id: true,
        location: true,
        members: true,
        name: true,
        note: true,
        startDate: true,

        userInfo: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyCalendar] })
  @ApiNestedQuery(CompanyCalendarFindManyArgs)
  async companyCalendars(
    @common.Req() request: Request
  ): Promise<CompanyCalendar[]> {
    const args = plainToClass(CompanyCalendarFindManyArgs, request.query);
    return this.service.companyCalendars({
      ...args,
      select: {
        calendarType: true,
        configNotify: true,
        duration: true,
        endDate: true,
        id: true,
        location: true,
        members: true,
        name: true,
        note: true,
        startDate: true,

        userInfo: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async companyCalendar(
    @common.Param() params: CompanyCalendarWhereUniqueInput
  ): Promise<CompanyCalendar | null> {
    const result = await this.service.companyCalendar({
      where: params,
      select: {
        calendarType: true,
        configNotify: true,
        duration: true,
        endDate: true,
        id: true,
        location: true,
        members: true,
        name: true,
        note: true,
        startDate: true,

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
  @swagger.ApiOkResponse({ type: CompanyCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompanyCalendar(
    @common.Param() params: CompanyCalendarWhereUniqueInput,
    @common.Body() data: CompanyCalendarUpdateInput
  ): Promise<CompanyCalendar | null> {
    try {
      return await this.service.updateCompanyCalendar({
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
          calendarType: true,
          configNotify: true,
          duration: true,
          endDate: true,
          id: true,
          location: true,
          members: true,
          name: true,
          note: true,
          startDate: true,

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
  @swagger.ApiOkResponse({ type: CompanyCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompanyCalendar(
    @common.Param() params: CompanyCalendarWhereUniqueInput
  ): Promise<CompanyCalendar | null> {
    try {
      return await this.service.deleteCompanyCalendar({
        where: params,
        select: {
          calendarType: true,
          configNotify: true,
          duration: true,
          endDate: true,
          id: true,
          location: true,
          members: true,
          name: true,
          note: true,
          startDate: true,

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
