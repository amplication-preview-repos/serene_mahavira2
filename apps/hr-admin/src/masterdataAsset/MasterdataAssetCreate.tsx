import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MasterdataAssetCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Remaining Asset" source="remainingAsset" />
        <NumberInput step={1} label="Total Asset" source="totalAsset" />
      </SimpleForm>
    </Create>
  );
};
