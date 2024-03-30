import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Role Id" source="roleId" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
