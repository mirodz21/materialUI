import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const MuiDialoge = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit test?</DialogTitle>
        <DialogContent>
          <DialogContentText>are you sure?</DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel </Button>
            <Button>Submit </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MuiDialoge;
