import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CompanyJobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Contract Type Id" source="contractTypeId" />
        <TextInput label="Department" source="department" />
        <TextInput label="Description Job" source="descriptionJob" />
        <TextInput label="Location" source="location" />
        <TextInput label="Stages" source="stages" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
