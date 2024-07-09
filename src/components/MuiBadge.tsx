import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import React from "react";

const MuiBadge = () => {
  return (
    <Stack spacing={3} direction="row">
      <Badge badgeContent={5} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" showZero max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="error" showZero>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
