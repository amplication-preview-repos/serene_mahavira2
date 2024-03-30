import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const UserExpenseRequestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Approved At" source="approvedAt" />
        <ReferenceInput
          source="approverInfo.id"
          reference="UserInfo"
          label="Approver Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Category" source="category" />
        <TextInput label="Note" source="note" />
        <DateTimeInput label="Purchase Date" source="purchaseDate" />
        <DateTimeInput label="Requested At" source="requestedAt" />
        <ReferenceInput
          source="requesterInfo.id"
          reference="UserInfo"
          label="Requester Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Status" source="status" />
        <NumberInput label="Tax Amount" source="taxAmount" />
        <TextInput label="Title" source="title" />
        <NumberInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
