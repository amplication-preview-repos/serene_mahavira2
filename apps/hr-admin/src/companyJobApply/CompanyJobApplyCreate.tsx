import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CompanyJobApplyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Company Job Id" source="companyJobId" />
        <TextInput label="Email" source="email" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Resume Path" source="resumePath" />
        <NumberInput step={1} label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
