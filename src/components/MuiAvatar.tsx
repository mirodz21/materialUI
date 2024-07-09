import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }} variant="square">
          CK
        </Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }} variant="rounded">
          CK
        </Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jain"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="Jain"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jain"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="Jain"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
