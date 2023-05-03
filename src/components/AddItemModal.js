import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const AddItemModal = ({ open, handleClose, onAddItem }) => {
  const [itemText, setItemText] = useState("");

  const handleSubmit = () => {
    if (itemText.trim()) {
      onAddItem(itemText.trim());
      setItemText("");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a Parent List Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new Parent List Name, please enter the Name here.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="itemText"
          label="Parent Name"
          type="text"
          fullWidth
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Parent</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemModal;
