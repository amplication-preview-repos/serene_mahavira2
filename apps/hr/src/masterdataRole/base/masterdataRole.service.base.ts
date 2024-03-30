/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MasterdataRole } from "@prisma/client";

export class MasterdataRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MasterdataRoleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataRoleCountArgs>
  ): Promise<number> {
    return this.prisma.masterdataRole.count(args);
  }

  async masterdataRoles<T extends Prisma.MasterdataRoleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataRoleFindManyArgs>
  ): Promise<MasterdataRole[]> {
    return this.prisma.masterdataRole.findMany(args);
  }
  async masterdataRole<T extends Prisma.MasterdataRoleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataRoleFindUniqueArgs>
  ): Promise<MasterdataRole | null> {
    return this.prisma.masterdataRole.findUnique(args);
  }
  async createMasterdataRole<T extends Prisma.MasterdataRoleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataRoleCreateArgs>
  ): Promise<MasterdataRole> {
    return this.prisma.masterdataRole.create<T>(args);
  }
  async updateMasterdataRole<T extends Prisma.MasterdataRoleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataRoleUpdateArgs>
  ): Promise<MasterdataRole> {
    return this.prisma.masterdataRole.update<T>(args);
  }
  async deleteMasterdataRole<T extends Prisma.MasterdataRoleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataRoleDeleteArgs>
  ): Promise<MasterdataRole> {
    return this.prisma.masterdataRole.delete(args);
  }
}
