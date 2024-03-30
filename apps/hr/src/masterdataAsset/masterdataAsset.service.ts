import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterdataAssetServiceBase } from "./base/masterdataAsset.service.base";

@Injectable()
export class MasterdataAssetService extends MasterdataAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
