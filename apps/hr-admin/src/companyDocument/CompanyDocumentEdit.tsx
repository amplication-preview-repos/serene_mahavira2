import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CompanyDocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="File Size" source="fileSize" />
        <TextInput label="File Type" source="fileType" />
        <TextInput label="Name" source="name" />
        <TextInput label="Path" source="path" />
        <DateTimeInput label="Published At" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};
