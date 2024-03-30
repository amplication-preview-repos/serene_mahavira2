import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USERTIMETRACKINGREQUEST_TITLE_FIELD } from "./UserTimeTrackingRequestTitle";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const UserTimeTrackingRequestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserTimeTrackingRequestDetail"
          target="timetracking_id"
          label="UserTimeTrackingRequestDetails"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
