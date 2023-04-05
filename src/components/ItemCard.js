import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const ItemCard = ({ item, onDelete, items, setItems }) => {

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("");
  

  const [crossedOut, setCrossedOut] = useState(false);

  const handleEdit = () => {
    setEditedText(item);
    setEditModalOpen(true);
  };
  

  const handleDelete = () => {
    onDelete(item);
  };

  const toggleCrossedOut = () => {
    setCrossedOut(!crossedOut);
  };

  const handleSave = () => {
    const newItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, text: editedText };
      }
      return i;
    });
    setItems(newItems);
    setEditModalOpen(false);
  };

  return (
    
    <Card
      sx={{
        minWidth: 275,
        margin: 1,
        width: { xs: "100%", sm: "50%" },
        position: "relative",
      }}
      onClick={toggleCrossedOut}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textDecoration: crossedOut ? "line-through" : "none",
          }}
        >
          {item}
        </Typography>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: 1,
        }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
    aria-label="edit"
    size="small"
    onClick={(e) => {
      e.stopPropagation();
      handleEdit();
    }}
  >
    <EditIcon />
  </IconButton>
      </Box>
      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
  <DialogTitle>Edit Item</DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      margin="dense"
      id="item"
      label="Item Name"
      type="text"
      fullWidth
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setEditModalOpen(false)}>Cancel</Button>
    <Button
      onClick={() => {
        handleEdit(item.id, editedText);
        setEditModalOpen(false);
      }}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>

    </Card>
  );
};

export default ItemCard;