import { Box, Stack } from "@mui/material";
import React from "react";

const MuiStack = () => {
  return (
    <Stack sx={{ border: "1px solid" }} direction="row">
      <Box sx={{ width: "100px", height: "100px", background: "red" }}>
        MuiBox
      </Box>
      <Box bgcolor="red">MuiBox</Box>
    </Stack>
  );
};

export default MuiStack;
