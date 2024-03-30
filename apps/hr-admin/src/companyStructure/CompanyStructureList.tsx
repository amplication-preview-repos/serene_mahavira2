import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompanyStructureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CompanyStructures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Parent Id" source="parentId" />
      </Datagrid>
    </List>
  );
};
