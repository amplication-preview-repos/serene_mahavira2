import * as graphql from "@nestjs/graphql";
import { MasterdataAssetResolverBase } from "./base/masterdataAsset.resolver.base";
import { MasterdataAsset } from "./base/MasterdataAsset";
import { MasterdataAssetService } from "./masterdataAsset.service";

@graphql.Resolver(() => MasterdataAsset)
export class MasterdataAssetResolver extends MasterdataAssetResolverBase {
  constructor(protected readonly service: MasterdataAssetService) {
    super(service);
  }
}
