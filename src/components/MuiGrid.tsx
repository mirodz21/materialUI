import { Box, Divider, Stack, Grid } from "@mui/material";
import React from "react";

const MuiGrid = () => {
  return (
    <>
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
      <Grid container my={4}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiGrid;
