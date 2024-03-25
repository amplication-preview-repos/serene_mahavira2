/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserSurveyResponse, // @ts-ignore
  CompanySurvey, // @ts-ignore
  UserInfo,
} from "@prisma/client";

export class UserSurveyResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserSurveyResponseCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserSurveyResponseCountArgs>
  ): Promise<number> {
    return this.prisma.userSurveyResponse.count(args);
  }

  async userSurveyResponses<T extends Prisma.UserSurveyResponseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserSurveyResponseFindManyArgs>
  ): Promise<UserSurveyResponse[]> {
    return this.prisma.userSurveyResponse.findMany(args);
  }
  async userSurveyResponse<T extends Prisma.UserSurveyResponseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserSurveyResponseFindUniqueArgs>
  ): Promise<UserSurveyResponse | null> {
    return this.prisma.userSurveyResponse.findUnique(args);
  }
  async createUserSurveyResponse<T extends Prisma.UserSurveyResponseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserSurveyResponseCreateArgs>
  ): Promise<UserSurveyResponse> {
    return this.prisma.userSurveyResponse.create<T>(args);
  }
  async updateUserSurveyResponse<T extends Prisma.UserSurveyResponseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserSurveyResponseUpdateArgs>
  ): Promise<UserSurveyResponse> {
    return this.prisma.userSurveyResponse.update<T>(args);
  }
  async deleteUserSurveyResponse<T extends Prisma.UserSurveyResponseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserSurveyResponseDeleteArgs>
  ): Promise<UserSurveyResponse> {
    return this.prisma.userSurveyResponse.delete(args);
  }

  async getCompanySurvey(parentId: string): Promise<CompanySurvey | null> {
    return this.prisma.userSurveyResponse
      .findUnique({
        where: { id: parentId },
      })
      .companySurvey();
  }

  async getUserInfo(parentId: string): Promise<UserInfo | null> {
    return this.prisma.userSurveyResponse
      .findUnique({
        where: { id: parentId },
      })
      .userInfo();
  }
}
