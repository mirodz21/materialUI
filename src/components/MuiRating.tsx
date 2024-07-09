import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [rated, setRated] = useState<number | null>(null);
  console.log(rated);
  const onRated = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setRated(newValue);
  };
  return (
    <Stack>
      <Rating
        value={rated}
        onChange={onRated}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
      />
    </Stack>
  );
};

export default MuiRating;
