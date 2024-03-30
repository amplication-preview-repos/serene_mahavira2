import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CompanyDocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="File Size" source="fileSize" />
        <TextField label="File Type" source="fileType" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
        <TextField label="Published At" source="publishedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
