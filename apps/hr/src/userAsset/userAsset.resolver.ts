import * as graphql from "@nestjs/graphql";
import { UserAssetResolverBase } from "./base/userAsset.resolver.base";
import { UserAsset } from "./base/UserAsset";
import { UserAssetService } from "./userAsset.service";

@graphql.Resolver(() => UserAsset)
export class UserAssetResolver extends UserAssetResolverBase {
  constructor(protected readonly service: UserAssetService) {
    super(service);
  }
}
