import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const CompanyCalendarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Calendar Type" source="calendarType" />
        <div />
        <NumberInput step={1} label="Duration" source="duration" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Location" source="location" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Note" source="note" />
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceInput
          source="userInfo.id"
          reference="UserInfo"
          label="User Info"
        >
          <SelectInput optionText={UserInfoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
