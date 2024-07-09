import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      {/* USING TEXT FIELD */}
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined"></TextField>
        <TextField label="name" variant="filled"></TextField>
        <TextField label="name" variant="standard"></TextField>
      </Stack>

      {/* TEXT FIELD WITH SIZE AND COLOR USING REQUIRED */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Secondary Small"
          size="small"
          color="secondary"
          required
        ></TextField>

        {/* WITH HELPER TEXT and DISABLE */}
        <TextField
          label="Secondary Small"
          size="small"
          color="secondary"
          helperText="do not share password"
        ></TextField>

        {/* TYPE PASSWORD and DISABLE */}
        <TextField
          label="Password"
          type="password"
          size="small"
          color="secondary"
          helperText="do not share password"
          // disabled
        ></TextField>
      </Stack>

      {/* INPUT ADORNMENT */}
      <Stack direction="row" spacing={3}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        {/* ADDING ERROR */}
      </Stack>
      <TextField
        label="Password"
        type="password"
        required
        error={!value}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={!value ? "Password required" : "Do not share your password"}
      />
    </Stack>
  );
};

export default MuiTextField;
