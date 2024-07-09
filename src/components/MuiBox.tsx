import React from "react";
import { Box } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          backgroundColor: "primary.main",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        SampleText
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Sample text
      </Box>
    </>
  );
};

export default MuiBox;
