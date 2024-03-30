import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const CompanyRecognitionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
