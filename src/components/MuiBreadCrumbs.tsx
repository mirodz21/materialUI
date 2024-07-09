import React from "react";
import { Box, Breadcrumbs, Link } from "@mui/material";

const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator="-"
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accesories
        </Link>
        <Link underline="hover" href="#">
          Shoes
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
