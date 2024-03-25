import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MasterdataAssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Remaining Asset" source="remainingAsset" />
        <NumberInput step={1} label="Total Asset" source="totalAsset" />
      </SimpleForm>
    </Edit>
  );
};
