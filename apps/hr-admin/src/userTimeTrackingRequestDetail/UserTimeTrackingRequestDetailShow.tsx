import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERTIMETRACKINGREQUEST_TITLE_FIELD } from "../userTimeTrackingRequest/UserTimeTrackingRequestTitle";

export const UserTimeTrackingRequestDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
