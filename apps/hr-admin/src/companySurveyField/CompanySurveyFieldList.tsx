import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANYSURVEY_TITLE_FIELD } from "../companySurvey/CompanySurveyTitle";

export const CompanySurveyFieldList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CompanySurveyFields"}
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
        <TextField label="Field Config" source="fieldConfig" />
        <TextField label="Field Type" source="fieldType" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Required" source="isRequired" />
        <TextField label="Label" source="label" />
        <TextField label="Position" source="position" />
      </Datagrid>
    </List>
  );
};
