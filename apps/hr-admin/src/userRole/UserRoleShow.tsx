import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserRoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Role Id" source="roleId" />
        <TextField label="User Id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
