/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CompanyJobApply } from "@prisma/client";

export class CompanyJobApplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CompanyJobApplyCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyJobApplyCountArgs>
  ): Promise<number> {
    return this.prisma.companyJobApply.count(args);
  }

  async companyJobApplies<T extends Prisma.CompanyJobApplyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyJobApplyFindManyArgs>
  ): Promise<CompanyJobApply[]> {
    return this.prisma.companyJobApply.findMany(args);
  }
  async companyJobApply<T extends Prisma.CompanyJobApplyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyJobApplyFindUniqueArgs>
  ): Promise<CompanyJobApply | null> {
    return this.prisma.companyJobApply.findUnique(args);
  }
  async createCompanyJobApply<T extends Prisma.CompanyJobApplyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyJobApplyCreateArgs>
  ): Promise<CompanyJobApply> {
    return this.prisma.companyJobApply.create<T>(args);
  }
  async updateCompanyJobApply<T extends Prisma.CompanyJobApplyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyJobApplyUpdateArgs>
  ): Promise<CompanyJobApply> {
    return this.prisma.companyJobApply.update<T>(args);
  }
  async deleteCompanyJobApply<T extends Prisma.CompanyJobApplyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyJobApplyDeleteArgs>
  ): Promise<CompanyJobApply> {
    return this.prisma.companyJobApply.delete(args);
  }
}
