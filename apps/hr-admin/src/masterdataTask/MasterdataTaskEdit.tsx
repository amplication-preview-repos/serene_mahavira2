import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MasterdataTaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
