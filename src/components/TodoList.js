import React, { useState, useEffect } from "react";
import { List, TextField, Button, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";

const TodoList = () => {
  const [TodoItems, setTodoItems] = useState([]);
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);

  // Load todo items from local storage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("TodoItems")) || [];
    setTodoItems(savedItems);
  }, []);

  // Save todo items to local storage whenever the list changes
  useEffect(() => {
    localStorage.setItem("TodoItems", JSON.stringify(TodoItems));
  }, [TodoItems]);


  const handleDeleteItem = (itemId) => {
    setTodoItems(TodoItems.filter((item) => item.id !== itemId)); // Remove the item from the list
  };

  const handleAddItem = (newItem) => {
    if (newItem) {
      setTodoItems([...TodoItems, { id: Date.now(), text: newItem }]);
    }
    setAddItemModalOpen(false);
  };

  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        {TodoItems.map((item) => (
          <ItemCard key={item.id} item={item.text} onDelete={() => handleDeleteItem(item.id)} />
        ))}
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => setAddItemModalOpen(true)}
      >
        <AddIcon />
      </Fab>
      <AddItemModal
        open={addItemModalOpen}
        handleClose={() => setAddItemModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
};
export default TodoList;