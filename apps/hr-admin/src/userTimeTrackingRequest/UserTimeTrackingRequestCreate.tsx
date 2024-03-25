import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserInfoTitle } from "../userInfo/UserInfoTitle";
import { UserTimeTrackingRequestDetailTitle } from "../userTimeTrackingRequestDetail/UserTimeTrackingRequestDetailTitle";

export const UserTimeTrackingRequestCreate = (
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
        <ReferenceArrayInput
          source="details"
          reference="UserTimeTrackingRequestDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTimeTrackingRequestDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Requested At" source="requestedAt" />
        <ReferenceInput
          source="requesterInfo.id"
          reference="UserInfo"
          label="Requester Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
