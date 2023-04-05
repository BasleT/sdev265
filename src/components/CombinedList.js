import React from "react";
import { Box, Grid } from "@mui/material";
import GroceryList from "./GroceryList";
import TodoList from "./TodoList";

const CombinedList = () => {
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
    </Box>
  );
};

export default CombinedList;