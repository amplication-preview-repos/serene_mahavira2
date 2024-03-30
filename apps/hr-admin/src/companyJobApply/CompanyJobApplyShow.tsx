import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CompanyJobApplyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Company Job Id" source="companyJobId" />
        <TextField label="Email" source="email" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Phone" source="phone" />
        <TextField label="Resume Path" source="resumePath" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
