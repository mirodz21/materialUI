import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="splash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            perferendis ad corporis maiores cupiditate ut.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">share</Button>
          <Button size="small">learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
