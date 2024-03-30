import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const MasterdataTaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Config Field" source="configField" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
