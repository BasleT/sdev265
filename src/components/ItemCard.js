import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const ItemCard = ({ item, onDelete, items, setItems, onUpdate, onAdd }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addSubItemModalOpen, setAddSubItemModalOpen] = useState(false);
  const [editedText, setEditedText] = useState(item.text);
  const [newSubItemText, setNewSubItemText] = useState('');


  const handleEdit = () => {
    setEditedText(item.text);
    setEditModalOpen(true);
  };

  const handleAddSubItemModal = () => {
    setAddSubItemModalOpen(true);
  };

  const handleAddSubItem = () => {
    if (newSubItemText) {
      onUpdate({ ...item, subItems: [...item.subItems, { id: Date.now(), text: newSubItemText, crossedOut: false }] });
      setNewSubItemText("");
      setAddSubItemModalOpen(false);
    }
  };

  const handleDeleteSubItem = (subItemId) => {
    onUpdate({ ...item, subItems: item.subItems.filter((subItem) => subItem.id !== subItemId) });
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

  const handleDelete = () => {
    onDelete(item);
  };

  const handleEditSubItem = (subItemId) => {
    const editedSubItem = item.subItems.find((subItem) => subItem.id === subItemId);
    if (editedSubItem) {
      const newSubItemText = prompt("Edit subitem:", editedSubItem.text);
      if (newSubItemText && newSubItemText !== editedSubItem.text) {
        const updatedSubItems = item.subItems.map((subItem) =>
          subItem.id === subItemId ? { ...subItem, text: newSubItemText } : subItem
        );
        onUpdate({ ...item, subItems: updatedSubItems });
      }
    }
  };

  const handleCrossOutSubItem = (subItemId) => {
    const updatedSubItems = item.subItems.map((subItem) =>
      subItem.id === subItemId ? { ...subItem, crossedOut: !subItem.crossedOut } : subItem
    );
    onUpdate({ ...item, subItems: updatedSubItems });
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: 1,
        width: { xs: "100%", sm: "50%" },
        position: "relative",
        height: "fit-content",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.text}
        </Typography>
        {item.subItems.map((subItem) => (
          <Box key={subItem.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
<FormControlLabel
control={
<Checkbox
checked={subItem.crossedOut}
onChange={() => handleCrossOutSubItem(subItem.id)}
/>
}
label={
<Typography
sx={{
textDecoration: subItem.crossedOut ? "line-through" : "none",
}}
>
{subItem.text}
</Typography>
}
/>
<Box>
<IconButton
aria-label="edit"
size="small"
onClick={(e) => {
e.stopPropagation();
handleEditSubItem(subItem.id);
}}
>
<EditIcon />
</IconButton>
<IconButton
aria-label="delete"
size="small"
onClick={(e) => {
e.stopPropagation();
handleDeleteSubItem(subItem.id);
}}
>
<DeleteIcon />
</IconButton>
</Box>
</Box>
))}
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
<IconButton
aria-label="add"
size="small"
onClick={(e) => {
e.stopPropagation();
handleAddSubItemModal()
}}
>
<AddIcon />
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
  <Button onClick={handleSave}>Save</Button>
</DialogActions>
</Dialog>
<Dialog open={addSubItemModalOpen} onClose={() => setAddSubItemModalOpen(false)}>
<DialogTitle>Add Subitem</DialogTitle>
<DialogContent>
  <TextField
    autoFocus
    margin="dense"
    id="new-subitem"
    label="New Subitem"
    type="text"
    fullWidth
    value={newSubItemText}
    onChange={(e) => setNewSubItemText(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleAddSubItem();
      }
    }}
  />
</DialogContent>
<DialogActions>
  <Button onClick={() => setAddSubItemModalOpen(false)}>Cancel</Button>
  <Button onClick={handleAddSubItem}>Add</Button>
</DialogActions>
</Dialog>
</Card>
);
};

export default ItemCard;