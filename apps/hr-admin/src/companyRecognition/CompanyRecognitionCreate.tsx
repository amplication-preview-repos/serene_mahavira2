import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const CompanyRecognitionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="requesterInfo.id"
          reference="UserInfo"
          label="Requester Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <ReferenceInput
          source="userInfo.id"
          reference="UserInfo"
          label="User Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
