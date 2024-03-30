import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const UserAssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Asset Id" source="assetId" />
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
