import { Avatar, Chip, Stack } from "@mui/material";
import React from "react";

const MuiChip = () => {
  // const [chips, setChips] = useState(["chip", "chip2", "chip3"]);

  // const handleDelete = (chipDel: string) => {
  //   setChips((chips) => chips.filter((chip) => chip !== chipDel));
  // };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small"></Chip>
      <Chip
        label="chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
      ></Chip>
      <Chip
        label="chip"
        color="primary"
        size="small"
        avatar={<Avatar />}
      ></Chip>

      <Chip
        label="click here"
        color="success"
        size="small"
        avatar={<Avatar />}
        onClick={() => alert("hello")}
      ></Chip>
      {/* <Chip
        label="delete"
        color="success"
        size="small"
        avatar={<Avatar />}
        onClick={() => alert("hello")}
        onDelete={() => alert("delete")}
      > */}
      {/* {chips.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))} */}
      {/* </Chip> */}
    </Stack>
  );
};

export default MuiChip;
