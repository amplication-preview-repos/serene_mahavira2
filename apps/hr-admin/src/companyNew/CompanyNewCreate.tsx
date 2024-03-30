import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const CompanyNewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <TextInput label="Image Path" source="imagePath" />
        <DateTimeInput label="Published Date" source="publishedDate" />
        <NumberInput step={1} label="Status" source="status" />
        <TextInput label="Tags" source="tags" />
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
