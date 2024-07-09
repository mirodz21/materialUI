import { Box, Divider, Stack } from "@mui/material";
import React from "react";

const MuiStack = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
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
    </Stack>
  );
};

export default MuiStack;
