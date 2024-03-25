import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UserNotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <DateTimeInput label="Created At" source="createdAt" />
        <BooleanInput label="Is Read" source="isRead" />
        <TextInput label="Title" source="title" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
