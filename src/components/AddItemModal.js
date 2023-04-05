// AddItemModal.js
import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddItemModal = ({ open, handleClose, onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    onAddItem(inputValue);
    setInputValue("");
    handleClose();
  };

  return (
    <div>
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddItem} disabled={!inputValue.trim()}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItemModal;