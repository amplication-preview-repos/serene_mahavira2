import * as graphql from "@nestjs/graphql";
import { MasterdataRoleResolverBase } from "./base/masterdataRole.resolver.base";
import { MasterdataRole } from "./base/MasterdataRole";
import { MasterdataRoleService } from "./masterdataRole.service";

@graphql.Resolver(() => MasterdataRole)
export class MasterdataRoleResolver extends MasterdataRoleResolverBase {
  constructor(protected readonly service: MasterdataRoleService) {
    super(service);
  }
}
