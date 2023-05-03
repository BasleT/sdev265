import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@mui/material";
import TodoList from "./TodoList";
import GroceryList from "./GroceryList";
import AddItemModal from "./AddItemModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
  },
  listContainer: {
    flex: 1,
    overflow: "auto",
    padding: theme.spacing(2),
  },
}));

const CombinedList = () => {
  const classes = useStyles();
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
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.listContainer}>
        <Grid item xs={12} sm={6}>
          <GroceryList />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TodoList />
        </Grid>
      </Grid>
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
