import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [switched, setSwitched] = useState(false);
  console.log(switched);

  const onSwitched = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitched(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={switched} onChange={onSwitched} />}
      />
    </Box>
  );
};

export default MuiSwitch;
