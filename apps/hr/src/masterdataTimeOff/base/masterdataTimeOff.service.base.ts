/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MasterdataTimeOff } from "@prisma/client";

export class MasterdataTimeOffServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MasterdataTimeOffCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataTimeOffCountArgs>
  ): Promise<number> {
    return this.prisma.masterdataTimeOff.count(args);
  }

  async masterdataTimeOffs<T extends Prisma.MasterdataTimeOffFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataTimeOffFindManyArgs>
  ): Promise<MasterdataTimeOff[]> {
    return this.prisma.masterdataTimeOff.findMany(args);
  }
  async masterdataTimeOff<T extends Prisma.MasterdataTimeOffFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataTimeOffFindUniqueArgs>
  ): Promise<MasterdataTimeOff | null> {
    return this.prisma.masterdataTimeOff.findUnique(args);
  }
  async createMasterdataTimeOff<T extends Prisma.MasterdataTimeOffCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataTimeOffCreateArgs>
  ): Promise<MasterdataTimeOff> {
    return this.prisma.masterdataTimeOff.create<T>(args);
  }
  async updateMasterdataTimeOff<T extends Prisma.MasterdataTimeOffUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataTimeOffUpdateArgs>
  ): Promise<MasterdataTimeOff> {
    return this.prisma.masterdataTimeOff.update<T>(args);
  }
  async deleteMasterdataTimeOff<T extends Prisma.MasterdataTimeOffDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MasterdataTimeOffDeleteArgs>
  ): Promise<MasterdataTimeOff> {
    return this.prisma.masterdataTimeOff.delete(args);
  }
}
