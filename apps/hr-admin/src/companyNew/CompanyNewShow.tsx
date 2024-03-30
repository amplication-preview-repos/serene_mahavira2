import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const CompanyNewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <TextField label="ID" source="id" />
        <TextField label="Image Path" source="imagePath" />
        <TextField label="Published Date" source="publishedDate" />
        <TextField label="Status" source="status" />
        <TextField label="Tags" source="tags" />
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
