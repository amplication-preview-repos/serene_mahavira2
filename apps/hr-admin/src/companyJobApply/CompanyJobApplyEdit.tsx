import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CompanyJobApplyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Company Job Id" source="companyJobId" />
        <TextInput label="Email" source="email" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Resume Path" source="resumePath" />
        <NumberInput step={1} label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
