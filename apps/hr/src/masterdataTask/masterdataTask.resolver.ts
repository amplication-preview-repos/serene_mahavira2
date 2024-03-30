import * as graphql from "@nestjs/graphql";
import { MasterdataTaskResolverBase } from "./base/masterdataTask.resolver.base";
import { MasterdataTask } from "./base/MasterdataTask";
import { MasterdataTaskService } from "./masterdataTask.service";

@graphql.Resolver(() => MasterdataTask)
export class MasterdataTaskResolver extends MasterdataTaskResolverBase {
  constructor(protected readonly service: MasterdataTaskService) {
    super(service);
  }
}
