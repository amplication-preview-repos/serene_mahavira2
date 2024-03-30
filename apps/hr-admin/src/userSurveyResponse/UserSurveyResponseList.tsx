import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANYSURVEY_TITLE_FIELD } from "../companySurvey/CompanySurveyTitle";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const UserSurveyResponseList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserSurveyResponses"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
