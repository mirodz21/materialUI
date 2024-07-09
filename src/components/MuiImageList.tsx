import React from "react";
import { ImageList, Stack, ImageListItem } from "@mui/material";

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={`${item.title}`} />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://images.unspash.com/photo-1551782450-a2132b4ba21d",
    title: "coffee",
  },
];

export default MuiImageList;
