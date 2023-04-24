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
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new item, please enter the item text here.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="itemText"
          label="Item Text"
          type="text"
          fullWidth
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Item</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemModal;
