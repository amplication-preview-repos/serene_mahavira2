import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CompanyStructureCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Parent Id" source="parentId" />
      </SimpleForm>
    </Create>
  );
};
