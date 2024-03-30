import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const CompanyRecognitionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Requester Info"
          source="userinfo.id"
          reference="UserInfo"
        >
          <TextField source={USERINFO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
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
