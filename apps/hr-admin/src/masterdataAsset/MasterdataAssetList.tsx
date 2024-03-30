import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MasterdataAssetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MasterdataAssets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Remaining Asset" source="remainingAsset" />
        <TextField label="Total Asset" source="totalAsset" />
      </Datagrid>
    </List>
  );
};
