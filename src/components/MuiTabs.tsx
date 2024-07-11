import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Favorite from "@mui/icons-material/Favorite";
import React, { useState } from "react";

const MuiTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            centered
          >
            <Tab
              label="Tab 1"
              value="1"
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab 2" value="2" />
            <Tab label="Tab 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel 1</TabPanel>
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
