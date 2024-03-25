import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERINFO_TITLE_FIELD } from "./UserInfoTitle";
import { COMPANYSURVEY_TITLE_FIELD } from "../companySurvey/CompanySurveyTitle";

export const UserInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Business Email" source="businessEmail" />
        <TextField label="Citizenship" source="citizenship" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="Documents" source="documents" />
        <TextField label="Educations" source="educations" />
        <TextField label="Emergency Contacts" source="emergencyContacts" />
        <TextField label="Employee Number" source="employeeNumber" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Jobs" source="jobs" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Manager Id" source="managerId" />
        <TextField label="Martial Status" source="martialStatus" />
        <TextField label="Nationality" source="nationality" />
        <TextField label="Personal Email" source="personalEmail" />
        <TextField label="Phone" source="phone" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Social Contacts" source="socialContacts" />
        <TextField label="Timeoffs" source="timeoffs" />
        <ReferenceManyField
          reference="UserExpenseRequest"
          target="approver_id"
          label="UserExpenseRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Approved At" source="approvedAt" />
            <ReferenceField
              label="Approver Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Attachments" source="attachments" />
            <TextField label="Category" source="category" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="Purchase Date" source="purchaseDate" />
            <TextField label="Requested At" source="requestedAt" />
            <ReferenceField
              label="Requester Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Tax Amount" source="taxAmount" />
            <TextField label="Title" source="title" />
            <TextField label="Total Amount" source="totalAmount" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserTimeOffRequest"
          target="approver_id"
          label="UserTimeOffRequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Approver Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="Num Days" source="numDays" />
            <TextField label="Period End" source="periodEnd" />
            <TextField label="Period Start" source="periodStart" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="User Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserTimeTrackingRequest"
          target="approver_id"
          label="UserTimeTrackingRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Approved At" source="approvedAt" />
            <ReferenceField
              label="Approver Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Requested At" source="requestedAt" />
            <ReferenceField
              label="Requester Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CompanyCalendar"
          target="hoster_id"
          label="CompanyCalendars"
        >
          <Datagrid rowClick="show">
            <TextField label="Calendar Type" source="calendarType" />
            <TextField label="Config Notify" source="configNotify" />
            <TextField label="Duration" source="duration" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <TextField label="Members" source="members" />
            <TextField label="Name" source="name" />
            <TextField label="Note" source="note" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField
              label="User Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CompanyNew"
          target="author_id"
          label="CompanyNews"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserExpenseRequest"
          target="requester_id"
          label="UserExpenseRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Approved At" source="approvedAt" />
            <ReferenceField
              label="Approver Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Attachments" source="attachments" />
            <TextField label="Category" source="category" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="Purchase Date" source="purchaseDate" />
            <TextField label="Requested At" source="requestedAt" />
            <ReferenceField
              label="Requester Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Tax Amount" source="taxAmount" />
            <TextField label="Title" source="title" />
            <TextField label="Total Amount" source="totalAmount" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CompanyRecognition"
          target="requester_id"
          label="CompanyRecognitions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserTimeTrackingRequest"
          target="requester_id"
          label="UserTimeTrackingRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Approved At" source="approvedAt" />
            <ReferenceField
              label="Approver Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Requested At" source="requestedAt" />
            <ReferenceField
              label="Requester Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserAsset"
          target="user_id"
          label="UserAssets"
        >
          <Datagrid rowClick="show">
            <TextField label="Asset Id" source="assetId" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="User Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CompanyRecognition"
          target="user_id"
          label="CompanyRecognitions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserSurveyResponse"
          target="user_id"
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
        <ReferenceManyField
          reference="UserTimeOffRequest"
          target="user_id"
          label="UserTimeOffRequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Approver Info"
              source="userinfo.id"
              reference="UserInfo"
            >
              <TextField source={USERINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="Num Days" source="numDays" />
            <TextField label="Period End" source="periodEnd" />
            <TextField label="Period Start" source="periodStart" />
            <TextField label="Status" source="status" />
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
