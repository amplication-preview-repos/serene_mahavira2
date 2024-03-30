import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MasterdataAssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Remaining Asset" source="remainingAsset" />
        <TextField label="Total Asset" source="totalAsset" />
      </SimpleShowLayout>
    </Show>
  );
};
