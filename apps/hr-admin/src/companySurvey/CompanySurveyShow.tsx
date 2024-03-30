import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { COMPANYSURVEY_TITLE_FIELD } from "./CompanySurveyTitle";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const CompanySurveyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="CompanySurveyField"
          target="survey_id"
          label="CompanySurveyFields"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company Survey"
              source="companysurvey.id"
              reference="CompanySurvey"
            >
              <TextField source={COMPANYSURVEY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Field Config" source="fieldConfig" />
            <TextField label="Field Type" source="fieldType" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Required" source="isRequired" />
            <TextField label="Label" source="label" />
            <TextField label="Position" source="position" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserSurveyResponse"
          target="survey_id"
          label="UserSurveyResponses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
