import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERINFO_TITLE_FIELD } from "../userInfo/UserInfoTitle";

export const UserExpenseRequestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
