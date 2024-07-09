import React from "react";
import { Box } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Box sx={{ width: "100px", height: "100px", background: "red" }}>
        MuiBox
      </Box>
      <Box bgcolor="red">MuiBox</Box>
    </>
  );
};

export default MuiBox;
