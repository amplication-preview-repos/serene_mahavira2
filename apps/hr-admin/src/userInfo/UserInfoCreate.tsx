import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { UserExpenseRequestTitle } from "../userExpenseRequest/UserExpenseRequestTitle";
import { UserTimeOffRequestTitle } from "../userTimeOffRequest/UserTimeOffRequestTitle";
import { UserTimeTrackingRequestTitle } from "../userTimeTrackingRequest/UserTimeTrackingRequestTitle";
import { CompanyCalendarTitle } from "../companyCalendar/CompanyCalendarTitle";
import { CompanyNewTitle } from "../companyNew/CompanyNewTitle";
import { CompanyRecognitionTitle } from "../companyRecognition/CompanyRecognitionTitle";
import { UserAssetTitle } from "../userAsset/UserAssetTitle";
import { UserSurveyResponseTitle } from "../userSurveyResponse/UserSurveyResponseTitle";

export const UserInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="approverExpenseRequest"
          reference="UserExpenseRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserExpenseRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="approverTimeoffRequest"
          reference="UserTimeOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTimeOffRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="approverTimetrackingRequest"
          reference="UserTimeTrackingRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTimeTrackingRequestTitle} />
        </ReferenceArrayInput>
        <TextInput label="Business Email" source="businessEmail" />
        <TextInput label="Citizenship" source="citizenship" />
        <TextInput label="City" source="city" />
        <ReferenceArrayInput
          source="companyCalendar"
          reference="CompanyCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyCalendarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="companyNews"
          reference="CompanyNew"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyNewTitle} />
        </ReferenceArrayInput>
        <TextInput label="Country" source="country" />
        <div />
        <div />
        <div />
        <TextInput label="Employee Number" source="employeeNumber" />
        <TextInput label="First Name" source="firstName" />
        <NumberInput step={1} label="Gender" source="gender" />
        <div />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Manager Id" source="managerId" />
        <NumberInput step={1} label="Martial Status" source="martialStatus" />
        <TextInput label="Nationality" source="nationality" />
        <TextInput label="Personal Email" source="personalEmail" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Postcode" source="postcode" />
        <ReferenceArrayInput
          source="requesterExpenseRequest"
          reference="UserExpenseRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserExpenseRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requesterInfo"
          reference="CompanyRecognition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyRecognitionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requesterTimetrackingRequest"
          reference="UserTimeTrackingRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTimeTrackingRequestTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
        <ReferenceArrayInput
          source="userAsset"
          reference="UserAsset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAssetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userInfo"
          reference="CompanyRecognition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyRecognitionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userSurveyResponse"
          reference="UserSurveyResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserSurveyResponseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userTimeoffRequest"
          reference="UserTimeOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTimeOffRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
