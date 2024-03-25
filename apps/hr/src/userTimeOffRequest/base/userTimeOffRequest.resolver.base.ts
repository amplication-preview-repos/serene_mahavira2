/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserTimeOffRequest } from "./UserTimeOffRequest";
import { UserTimeOffRequestCountArgs } from "./UserTimeOffRequestCountArgs";
import { UserTimeOffRequestFindManyArgs } from "./UserTimeOffRequestFindManyArgs";
import { UserTimeOffRequestFindUniqueArgs } from "./UserTimeOffRequestFindUniqueArgs";
import { CreateUserTimeOffRequestArgs } from "./CreateUserTimeOffRequestArgs";
import { UpdateUserTimeOffRequestArgs } from "./UpdateUserTimeOffRequestArgs";
import { DeleteUserTimeOffRequestArgs } from "./DeleteUserTimeOffRequestArgs";
import { UserInfo } from "../../userInfo/base/UserInfo";
import { UserTimeOffRequestService } from "../userTimeOffRequest.service";
@graphql.Resolver(() => UserTimeOffRequest)
export class UserTimeOffRequestResolverBase {
  constructor(protected readonly service: UserTimeOffRequestService) {}

  async _userTimeOffRequestsMeta(
    @graphql.Args() args: UserTimeOffRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserTimeOffRequest])
  async userTimeOffRequests(
    @graphql.Args() args: UserTimeOffRequestFindManyArgs
  ): Promise<UserTimeOffRequest[]> {
    return this.service.userTimeOffRequests(args);
  }

  @graphql.Query(() => UserTimeOffRequest, { nullable: true })
  async userTimeOffRequest(
    @graphql.Args() args: UserTimeOffRequestFindUniqueArgs
  ): Promise<UserTimeOffRequest | null> {
    const result = await this.service.userTimeOffRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserTimeOffRequest)
  async createUserTimeOffRequest(
    @graphql.Args() args: CreateUserTimeOffRequestArgs
  ): Promise<UserTimeOffRequest> {
    return await this.service.createUserTimeOffRequest({
      ...args,
      data: {
        ...args.data,

        approverInfo: args.data.approverInfo
          ? {
              connect: args.data.approverInfo,
            }
          : undefined,

        userInfo: args.data.userInfo
          ? {
              connect: args.data.userInfo,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserTimeOffRequest)
  async updateUserTimeOffRequest(
    @graphql.Args() args: UpdateUserTimeOffRequestArgs
  ): Promise<UserTimeOffRequest | null> {
    try {
      return await this.service.updateUserTimeOffRequest({
        ...args,
        data: {
          ...args.data,

          approverInfo: args.data.approverInfo
            ? {
                connect: args.data.approverInfo,
              }
            : undefined,

          userInfo: args.data.userInfo
            ? {
                connect: args.data.userInfo,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserTimeOffRequest)
  async deleteUserTimeOffRequest(
    @graphql.Args() args: DeleteUserTimeOffRequestArgs
  ): Promise<UserTimeOffRequest | null> {
    try {
      return await this.service.deleteUserTimeOffRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => UserInfo, {
    nullable: true,
    name: "approverInfo",
  })
  async getApproverInfo(
    @graphql.Parent() parent: UserTimeOffRequest
  ): Promise<UserInfo | null> {
    const result = await this.service.getApproverInfo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => UserInfo, {
    nullable: true,
    name: "userInfo",
  })
  async getUserInfo(
    @graphql.Parent() parent: UserTimeOffRequest
  ): Promise<UserInfo | null> {
    const result = await this.service.getUserInfo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}