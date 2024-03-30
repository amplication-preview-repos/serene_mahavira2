import * as graphql from "@nestjs/graphql";
import { UserInfoResolverBase } from "./base/userInfo.resolver.base";
import { UserInfo } from "./base/UserInfo";
import { UserInfoService } from "./userInfo.service";

@graphql.Resolver(() => UserInfo)
export class UserInfoResolver extends UserInfoResolverBase {
  constructor(protected readonly service: UserInfoService) {
    super(service);
  }
}
