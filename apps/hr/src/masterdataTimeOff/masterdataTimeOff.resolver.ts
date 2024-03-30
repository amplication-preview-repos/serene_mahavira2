import * as graphql from "@nestjs/graphql";
import { MasterdataTimeOffResolverBase } from "./base/masterdataTimeOff.resolver.base";
import { MasterdataTimeOff } from "./base/MasterdataTimeOff";
import { MasterdataTimeOffService } from "./masterdataTimeOff.service";

@graphql.Resolver(() => MasterdataTimeOff)
export class MasterdataTimeOffResolver extends MasterdataTimeOffResolverBase {
  constructor(protected readonly service: MasterdataTimeOffService) {
    super(service);
  }
}
