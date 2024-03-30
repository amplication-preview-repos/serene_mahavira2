import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERTIMETRACKINGREQUEST_TITLE_FIELD } from "../userTimeTrackingRequest/UserTimeTrackingRequestTitle";

export const UserTimeTrackingRequestDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserTimeTrackingRequestDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Date" source="date" />
        <TextField label="From Time" source="fromTime" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="Number Hours" source="numberHours" />
        <ReferenceField
          label="Timetracking Info"
          source="usertimetrackingrequest.id"
          reference="UserTimeTrackingRequest"
        >
          <TextField source={USERTIMETRACKINGREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="To Time" source="toTime" />
      </Datagrid>
    </List>
  );
};
