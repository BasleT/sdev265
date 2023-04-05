// Sidebar.js
import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

const Sidebar = ({ handleGroceryListClick, handleTodoListClick, handleCombinedListClick, handleHomePageClick }) => {
  return (
    <div className="sidebar">
      <List>
      <ListItemButton key="HomePage" onClick={handleHomePageClick}>
          <ListItemText primary="Home Page" />
        </ListItemButton>
        <ListItemButton key="grocery-list" onClick={handleGroceryListClick}>
          <ListItemText primary="Grocery List" />
        </ListItemButton>
        <ListItemButton key="todo-list" onClick={handleTodoListClick}>
          <ListItemText primary="Todo List" />
        </ListItemButton>
        <ListItemButton key="Combined-list" onClick={handleCombinedListClick}>
          <ListItemText primary="Combined List" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Sidebar;