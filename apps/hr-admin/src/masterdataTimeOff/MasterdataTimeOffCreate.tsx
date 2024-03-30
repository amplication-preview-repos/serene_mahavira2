import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const MasterdataTimeOffCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" source="description" />
        <TextInput label="Icon" source="icon" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Total Days" source="totalDays" />
      </SimpleForm>
    </Create>
  );
};
