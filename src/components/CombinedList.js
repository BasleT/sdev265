import React, { useState } from "react";
import { Box, Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./TodoList";
import GroceryList from "./GroceryList";
import AddItemModal from "./AddItemModal";

const CombinedList = () => {
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);

  const handleAddItem = (newItem, listType) => {
    if (newItem) {
      const list = document.getElementById(listType);
      if (list) {
        list.click();
      }
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <GroceryList />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TodoList />
        </Grid>
      </Grid>
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
        showListTypeSelector={true}
        defaultListType={"grocery"}
      />
    </Box>
  );
};

export default CombinedList;
