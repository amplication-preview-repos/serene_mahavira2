import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CompanyJobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Contract Type Id" source="contractTypeId" />
        <TextField label="Department" source="department" />
        <TextField label="Description Job" source="descriptionJob" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Stages" source="stages" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
