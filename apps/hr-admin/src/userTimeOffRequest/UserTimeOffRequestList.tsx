import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const UserTimeOffRequestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserTimeOffRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Approver Info"
          source="userinfo.id"
          reference="UserInfo"
        >
          <TextField source={USERINFO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="Num Days" source="numDays" />
        <TextField label="Period End" source="periodEnd" />
        <TextField label="Period Start" source="periodStart" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="User Info"
          source="userinfo.id"
          reference="UserInfo"
        >
          <TextField source={USERINFO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
