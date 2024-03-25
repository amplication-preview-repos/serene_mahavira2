import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CompanySurveyTitle } from "../companySurvey/CompanySurveyTitle";

export const CompanySurveyFieldCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="companySurvey.id"
          reference="CompanySurvey"
          label="Company Survey"
        >
          <SelectInput optionText={CompanySurveyTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Field Type" source="fieldType" />
        <BooleanInput label="Is Required" source="isRequired" />
        <TextInput label="Label" source="label" />
        <NumberInput step={1} label="Position" source="position" />
      </SimpleForm>
    </Create>
  );
};
