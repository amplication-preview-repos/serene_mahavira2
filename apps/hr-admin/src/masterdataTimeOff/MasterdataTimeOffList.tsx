import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MasterdataTimeOffList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MasterdataTimeOffs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <TextField label="Description" source="description" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Total Days" source="totalDays" />
      </Datagrid>
    </List>
  );
};
