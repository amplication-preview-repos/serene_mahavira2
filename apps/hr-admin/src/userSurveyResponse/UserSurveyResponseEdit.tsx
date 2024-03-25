import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CompanySurveyTitle } from "../companySurvey/CompanySurveyTitle";
import { UserInfoTitle } from "../userInfo/UserInfoTitle";

export const UserSurveyResponseEdit = (
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
        <DateTimeInput label="Submitted At" source="submittedAt" />
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
