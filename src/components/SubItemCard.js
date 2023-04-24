import React, { useState } from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SubItemCard = ({ subItem, onDelete, onEdit }) => {
  const [crossedOut, setCrossedOut] = useState(false);
  const toggleCrossedOut = () => {
    setCrossedOut(!crossedOut);
  };

  const handleDelete = () => {
    onDelete(subItem);
  };

  const handleEdit = () => {
    onEdit(subItem);
  };

  return (
    <div>
      <Typography
        variant="body1"
        component="p"
        sx={{
          paddingLeft: 2,
          textDecoration: crossedOut ? "line-through" : "none",
        }}
        onClick={toggleCrossedOut}
      >
        {subItem.text}
      </Typography>
      <Box sx={{
        position: "absolute",
        top: 0,
        right: 0,
        padding: 1,
      }}>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="edit"
          size="small"
          onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default SubItemCard;
