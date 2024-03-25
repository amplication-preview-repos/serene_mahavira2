import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserNotificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserNotifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="content" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Read" source="isRead" />
        <TextField label="Title" source="title" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
