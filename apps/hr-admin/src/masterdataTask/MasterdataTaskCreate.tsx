import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MasterdataTaskCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
