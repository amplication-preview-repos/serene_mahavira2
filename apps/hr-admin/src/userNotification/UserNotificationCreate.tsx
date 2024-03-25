import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UserNotificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <DateTimeInput label="Created At" source="createdAt" />
        <BooleanInput label="Is Read" source="isRead" />
        <TextInput label="Title" source="title" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
