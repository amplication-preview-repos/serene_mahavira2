import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import { COMPANYSURVEY_TITLE_FIELD } from "../companySurvey/CompanySurveyTitle";

export const CompanySurveyFieldShow = (
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
        <TextField label="Field Config" source="fieldConfig" />
        <TextField label="Field Type" source="fieldType" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Required" source="isRequired" />
        <TextField label="Label" source="label" />
        <TextField label="Position" source="position" />
      </SimpleShowLayout>
    </Show>
  );
};
