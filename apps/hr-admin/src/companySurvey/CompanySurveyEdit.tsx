import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanySurveyFieldTitle } from "../companySurveyField/CompanySurveyFieldTitle";
import { UserSurveyResponseTitle } from "../userSurveyResponse/UserSurveyResponseTitle";

export const CompanySurveyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="companySurveyFields"
          reference="CompanySurveyField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanySurveyFieldTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="userSurveyResponse"
          reference="UserSurveyResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserSurveyResponseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
