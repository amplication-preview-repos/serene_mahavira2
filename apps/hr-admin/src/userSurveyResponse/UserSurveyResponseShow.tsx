import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { COMPANYSURVEY_TITLE_FIELD } from "../companySurvey/CompanySurveyTitle";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const UserSurveyResponseShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Company Survey"
          source="companysurvey.id"
          reference="CompanySurvey"
        >
          <TextField source={COMPANYSURVEY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Response Json" source="responseJson" />
        <TextField label="Submitted At" source="submittedAt" />
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
