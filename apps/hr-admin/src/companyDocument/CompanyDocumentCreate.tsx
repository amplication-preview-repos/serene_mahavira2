import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CompanyDocumentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="File Size" source="fileSize" />
        <TextInput label="File Type" source="fileType" />
        <TextInput label="Name" source="name" />
        <TextInput label="Path" source="path" />
        <DateTimeInput label="Published At" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};
