import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import React from "react";
import Check from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="warning">Hello</Alert>
      <Alert severity="error">Hello</Alert>
      <Alert severity="info">hello</Alert>
      <Alert severity="success">hello</Alert>

      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Hello
      </Alert>
      <Alert variant="outlined" severity="error">
        <AlertTitle>Warning</AlertTitle>
        Hello
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>Warning</AlertTitle>
        hello
      </Alert>
      <Alert variant="outlined" severity="success">
        <AlertTitle>Warning</AlertTitle>
        hello
      </Alert>

      <Alert variant="filled" severity="warning" onClose={() => alert("close")}>
        Hello
      </Alert>
      <Alert
        variant="filled"
        severity="error"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        Hello
      </Alert>
      <Alert variant="filled" severity="info">
        hello
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
      >
        <AlertTitle>Warning</AlertTitle>
        hello
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
