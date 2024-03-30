import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CompanyJobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Contract Type Id" source="contractTypeId" />
        <TextInput label="Department" source="department" />
        <TextInput label="Description Job" source="descriptionJob" />
        <TextInput label="Location" source="location" />
        <TextInput label="Stages" source="stages" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
