import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

const AddItemModal = ({ open, handleClose, onAddItem, listType }) => {
  const [newItemText, setNewItemText] = useState("");

  const handleAdd = () => {
    onAddItem(newItemText, listType);
    setNewItemText("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="item"
          label="Item Name"
          type="text"
          fullWidth
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemModal;
