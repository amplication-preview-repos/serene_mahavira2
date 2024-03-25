import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTimeTrackingRequestTitle } from "../userTimeTrackingRequest/UserTimeTrackingRequestTitle";

export const UserTimeTrackingRequestDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="From Time" source="fromTime" />
        <TextInput label="Note" source="note" />
        <NumberInput step={1} label="Number Hours" source="numberHours" />
        <ReferenceInput
          source="timetrackingInfo.id"
          reference="UserTimeTrackingRequest"
          label="Timetracking Info"
        >
          <SelectInput optionText={UserTimeTrackingRequestTitle} />
        </ReferenceInput>
        <TextInput label="To Time" source="toTime" />
      </SimpleForm>
    </Create>
  );
};
