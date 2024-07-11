import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: "500", minHeight: "400" }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
