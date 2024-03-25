import { UserExpenseRequestWhereInput } from "./UserExpenseRequestWhereInput";
import { UserExpenseRequestOrderByInput } from "./UserExpenseRequestOrderByInput";

export type UserExpenseRequestFindManyArgs = {
  where?: UserExpenseRequestWhereInput;
  orderBy?: Array<UserExpenseRequestOrderByInput>;
  skip?: number;
  take?: number;
};
