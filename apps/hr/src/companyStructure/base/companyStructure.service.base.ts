/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CompanyStructure } from "@prisma/client";

export class CompanyStructureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CompanyStructureCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyStructureCountArgs>
  ): Promise<number> {
    return this.prisma.companyStructure.count(args);
  }

  async companyStructures<T extends Prisma.CompanyStructureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyStructureFindManyArgs>
  ): Promise<CompanyStructure[]> {
    return this.prisma.companyStructure.findMany(args);
  }
  async companyStructure<T extends Prisma.CompanyStructureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyStructureFindUniqueArgs>
  ): Promise<CompanyStructure | null> {
    return this.prisma.companyStructure.findUnique(args);
  }
  async createCompanyStructure<T extends Prisma.CompanyStructureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyStructureCreateArgs>
  ): Promise<CompanyStructure> {
    return this.prisma.companyStructure.create<T>(args);
  }
  async updateCompanyStructure<T extends Prisma.CompanyStructureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyStructureUpdateArgs>
  ): Promise<CompanyStructure> {
    return this.prisma.companyStructure.update<T>(args);
  }
  async deleteCompanyStructure<T extends Prisma.CompanyStructureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyStructureDeleteArgs>
  ): Promise<CompanyStructure> {
    return this.prisma.companyStructure.delete(args);
  }
}