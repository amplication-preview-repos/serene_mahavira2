import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Business Email" source="businessEmail" />
        <TextField label="Citizenship" source="citizenship" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="Documents" source="documents" />
        <TextField label="Educations" source="educations" />
        <TextField label="Emergency Contacts" source="emergencyContacts" />
        <TextField label="Employee Number" source="employeeNumber" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Jobs" source="jobs" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Manager Id" source="managerId" />
        <TextField label="Martial Status" source="martialStatus" />
        <TextField label="Nationality" source="nationality" />
        <TextField label="Personal Email" source="personalEmail" />
        <TextField label="Phone" source="phone" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Social Contacts" source="socialContacts" />
        <TextField label="Timeoffs" source="timeoffs" />
      </Datagrid>
    </List>
  );
};
