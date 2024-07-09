import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 1"
              secondary="Secondary Text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List item 2"
            secondary="Secondary Text"
          ></ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List item 3"
            secondary="Secondary Text"
          ></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
