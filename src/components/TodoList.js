import React, { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";
import SearchBar from "./SearchBar"
import ShareButton from "./ShareButton";

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

  const handleUpdateItem = (updatedItem) => {
    setTodoItems(todoItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const handleAddItem = (newItem) => {
    if (newItem) {
      setTodoItems([...todoItems, { id: Date.now(), text: newItem, subItems: [] }]);
      setAddItemModalOpen(false);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredItems = todoItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Box display="flex" flexWrap="wrap">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={() => handleDeleteItem(item.id)}
            onUpdate={handleUpdateItem} // Pass the onUpdate function
          />
        ))}
      </Box>
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setAddItemModalOpen(true)}
        >
          <AddIcon />
        </Fab>
        <ShareButton
          listItems={filteredItems}
          sx={{ marginLeft: 2, marginRight: 2 }}
        />
      </Box>
      <AddItemModal
        open={addItemModalOpen}
        handleClose={() => setAddItemModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
};

export default TodoList;
