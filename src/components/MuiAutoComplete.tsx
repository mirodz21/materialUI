import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log(value);
  const skills = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "angular",
  ];

  return (
    <Stack>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(e: any, newValue: string | null) => setValue(newValue)}
        // freeSolo if you need value outside the options
      />
    </Stack>
  );
};

export default MuiAutoComplete;
