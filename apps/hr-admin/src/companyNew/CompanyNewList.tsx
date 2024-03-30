import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const CompanyNewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CompanyNews"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
