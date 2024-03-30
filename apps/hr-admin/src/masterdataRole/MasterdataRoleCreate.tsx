import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MasterdataRoleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
