import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const UserTimeTrackingRequestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserTimeTrackingRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Approved At" source="approvedAt" />
        <ReferenceField
          label="Approver Info"
          source="userinfo.id"
          reference="UserInfo"
        >
          <TextField source={USERINFO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Requested At" source="requestedAt" />
        <ReferenceField
          label="Requester Info"
          source="userinfo.id"
          reference="UserInfo"
        >
          <TextField source={USERINFO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
      </Datagrid>
    </List>
  );
};
