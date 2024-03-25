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
  CompanyNew, // @ts-ignore
  UserInfo,
} from "@prisma/client";

export class CompanyNewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CompanyNewCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyNewCountArgs>
  ): Promise<number> {
    return this.prisma.companyNew.count(args);
  }

  async companyNews<T extends Prisma.CompanyNewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyNewFindManyArgs>
  ): Promise<CompanyNew[]> {
    return this.prisma.companyNew.findMany(args);
  }
  async companyNew<T extends Prisma.CompanyNewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyNewFindUniqueArgs>
  ): Promise<CompanyNew | null> {
    return this.prisma.companyNew.findUnique(args);
  }
  async createCompanyNew<T extends Prisma.CompanyNewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyNewCreateArgs>
  ): Promise<CompanyNew> {
    return this.prisma.companyNew.create<T>(args);
  }
  async updateCompanyNew<T extends Prisma.CompanyNewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyNewUpdateArgs>
  ): Promise<CompanyNew> {
    return this.prisma.companyNew.update<T>(args);
  }
  async deleteCompanyNew<T extends Prisma.CompanyNewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyNewDeleteArgs>
  ): Promise<CompanyNew> {
    return this.prisma.companyNew.delete(args);
  }

  async getUserInfo(parentId: string): Promise<UserInfo | null> {
    return this.prisma.companyNew
      .findUnique({
        where: { id: parentId },
      })
      .userInfo();
  }
}