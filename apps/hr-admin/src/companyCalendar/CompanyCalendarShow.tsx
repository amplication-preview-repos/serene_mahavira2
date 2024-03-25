import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const CompanyCalendarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Calendar Type" source="calendarType" />
        <TextField label="Config Notify" source="configNotify" />
        <TextField label="Duration" source="duration" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Members" source="members" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="Start Date" source="startDate" />
        <ReferenceField
          label="User Info"
          source="userinfo.id"
          reference="UserInfo"
        >
          <TextField source={USERINFO_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
