import React, { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);

  // Load grocery items from local storage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("groceryItems")) || [];
    setGroceryItems(savedItems);
  }, []);

  // Save grocery items to local storage whenever the list changes
  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
  }, [groceryItems]);


  const handleDeleteItem = (itemId) => {
    setGroceryItems(groceryItems.filter((item) => item.id !== itemId)); // Remove the item from the list
  };

  const handleAddItem = (newItem) => {
    if (newItem) {
      setGroceryItems([...groceryItems, { id: Date.now(), text: newItem }]);
    }
    setAddItemModalOpen(false);
  };

  return (
    <div>
      <Box display="flex" flexWrap="wrap">
        {groceryItems.map((item) => (
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
export default GroceryList;