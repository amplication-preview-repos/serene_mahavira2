import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const UserTimeOffRequestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="approverInfo.id"
          reference="UserInfo"
          label="Approver Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
        <TextInput label="Note" source="note" />
        <NumberInput step={1} label="Num Days" source="numDays" />
        <DateTimeInput label="Period End" source="periodEnd" />
        <DateTimeInput label="Period Start" source="periodStart" />
        <NumberInput step={1} label="Status" source="status" />
        <ReferenceInput
          source="userInfo.id"
          reference="UserInfo"
          label="User Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
