import * as graphql from "@nestjs/graphql";
import { UserExpenseRequestResolverBase } from "./base/userExpenseRequest.resolver.base";
import { UserExpenseRequest } from "./base/UserExpenseRequest";
import { UserExpenseRequestService } from "./userExpenseRequest.service";

@graphql.Resolver(() => UserExpenseRequest)
export class UserExpenseRequestResolver extends UserExpenseRequestResolverBase {
  constructor(protected readonly service: UserExpenseRequestService) {
    super(service);
  }
}
