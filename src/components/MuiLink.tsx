import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import React, { useState } from "react";

const MuiLink = () => {
  const [angchorEl, setAngchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(angchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAngchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAngchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="text">
            Features
          </Button>
          <Button color="inherit" variant="text">
            Pricing
          </Button>
          <Button color="inherit" variant="text">
            About
          </Button>
          <Button color="inherit" variant="text">
            Login
          </Button>
          <Button
            color="inherit"
            variant="text"
            id="resource-button"
            onClick={handleClick}
            aria-controls={open ? "resource-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Resources
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={angchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiLink;
