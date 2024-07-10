import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="error" />
      <CircularProgress variant="determinate" value={60} />
      <LinearProgress color="error" />
      <LinearProgress variant="determinate" value={60} />
      <LinearProgress />
    </Stack>
  );
};

export default MuiProgress;
