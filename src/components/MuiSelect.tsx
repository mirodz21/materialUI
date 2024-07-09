import React, { useState } from "react";
import { Box, TextField, MenuItem, Stack } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  const countryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };

  return (
    <Stack>
      <Box width="250px">
        <TextField
          label="Select Menu"
          select
          value={country}
          onChange={countryChange}
          fullWidth
        >
          <MenuItem value="Adobo">Adobo</MenuItem>
          <MenuItem value="Sinigang">Sinigang</MenuItem>
          <MenuItem value="Tinola">Tinola</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="Select Menu"
          select
          value={country}
          onChange={countryChange}
          fullWidth
        >
          <MenuItem value="Adobo">Adobo</MenuItem>
          <MenuItem value="Sinigang">Sinigang</MenuItem>
          <MenuItem value="Tinola">Tinola</MenuItem>
        </TextField>
      </Box>

      {/* if need multi select. check video: https://www.youtube.com/watch?v=tKApfSoDPgM&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=8 */}
    </Stack>
  );
};

export default MuiSelect;
