import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompanyJobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CompanyJobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Contract Type Id" source="contractTypeId" />
        <TextField label="Department" source="department" />
        <TextField label="Description Job" source="descriptionJob" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Stages" source="stages" />
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
