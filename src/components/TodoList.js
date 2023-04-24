import React, { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";

const TodoList = ({ listType = "todo" }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(listType + "Items")) || [];
    setTodoItems(savedItems);
  }, [listType]);

  useEffect(() => {
    localStorage.setItem(listType + "Items", JSON.stringify(todoItems));
  }, [listType, todoItems]);

  const handleDeleteItem = (itemId) => {
    setTodoItems(todoItems.filter((item) => item.id !== itemId));
  };

  const handleAddItem = (newItem) => {
    if (newItem) {
      setTodoItems([...todoItems, { id: Date.now(), text: newItem }]);
    }
    setAddItemModalOpen(false);
  };

  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        {todoItems.map((item) => (
          <ItemCard key={item.id} item={item} onDelete={() => handleDeleteItem(item.id)} />
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
        onAddItem={(newItem) => handleAddItem(newItem)}
      />
    </div>
  );
};

export default TodoList;
