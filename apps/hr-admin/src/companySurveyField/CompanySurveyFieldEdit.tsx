import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CompanySurveyTitle } from "../companySurvey/CompanySurveyTitle";

export const CompanySurveyFieldEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
