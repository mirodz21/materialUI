import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [format, setformat] = useState<string | null>(null);

  const onFormatChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setformat(updatedFormat);
    console.log(format);
  };

  return (
    <Stack spacing={4}>
      {/* // USING BUTTONS  TEXT/OUTLINED/CONTAINED*/}
      <Stack spacing={3} direction="row">
        <Button variant="text" href="">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outline</Button>
      </Stack>

      {/* BUTTON COLORS PRIMARY/SECONDARY/ERROR/WARNING/INFO/SUCCESS*/}
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      {/* BUTTON SIZES SMALL/MEDIUM/LARGE*/}
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" color="primary" size="small">
          warning
        </Button>
        <Button variant="contained" color="primary" size="medium">
          info
        </Button>
        <Button variant="contained" color="primary" size="large">
          success
        </Button>
      </Stack>

      {/* USING ICONS IN A BUTTON */}
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" startIcon={<AddBoxIcon />}>
          warning
        </Button>
        <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
          Send
        </Button>
        <IconButton color="success" size="large">
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>

      {/* USING BOTTON GROUP*/}
      <Stack direction="row">
        <ButtonGroup variant="text" orientation="vertical">
          <Button>Send</Button>
          <Button>Send</Button>
          <Button>Send</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          value={format}
          onChange={onFormatChange}
          size="small"
          color="success"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>

    // disableElevation, disableRipple
  );
};

export default MuiButton;
