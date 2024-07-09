import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", botoom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<ContentCutIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCutIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
        tooltipOpen
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
        tooltipOpen
      ></SpeedDialAction>
    </SpeedDial>
  );
};

export default MuiSpeedDial;
