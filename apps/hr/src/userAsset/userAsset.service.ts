import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAssetServiceBase } from "./base/userAsset.service.base";

@Injectable()
export class UserAssetService extends UserAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
