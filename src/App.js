// App.js
import React, { useState, useEffect } from "react";
import { Box, Container, Grid, SwipeableDrawer, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cookies from "js-cookie";
import "./App.css";
import Sidebar from "./components/Sidebar";
import GroceryList from "./components/GroceryList";
import TodoList from "./components/TodoList";
import CombinedList from "./components/CombinedList";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  //sidebar open
  const [sidebarOpen, setSidebarOpen] = useState(
    Cookies.get("sidebarOpen") === "true"
  );

  //gets it set for HomePage to be the active homepage
  const [activeTab, setActiveTab] = useState("HomePage");

  //sidebar toggle setting
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  //handles what to do when grocery list is clicked. sets active tab to grocery list.
  const handleGroceryListClick = () => {
    setActiveTab("Grocery List");
    setSidebarOpen(false);
  };

  //handles what to do when grocery list is clicked. sets active tab to grocery list.
  const handleTodoListClick = () => {
    setActiveTab("Todo List");
    setSidebarOpen(false);
  };

  //handles what to do when grocery list is clicked. sets active tab to grocery list.
  const handleCombinedListClick = () => {
    setActiveTab("Combined List");
    setSidebarOpen(false);
  };

  //handles the home button tab on the nav bar. opens home
  const handleHomePageClick = () => {
    setActiveTab("HomePage");
    setSidebarOpen(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sidebar = (
    <Sidebar
      handleGroceryListClick={handleGroceryListClick}
      handleTodoListClick={handleTodoListClick}
      handleCombinedListClick={handleCombinedListClick}
      handleHomePageClick={handleHomePageClick}
    />
  );

  let content;
  switch (activeTab) {
    case "Grocery List":
      content = <GroceryList />;
      break;
    case "Todo List":
      content = <TodoList />;
      break;
    case "HomePage":
      content = <HomePage />;
      break;
    case "Combined List":
      content = <CombinedList />;
      break;
    default:
      content = <CombinedList />;
      break;
  }

  //uses a cookie to remember the state of the sidebar (active or closed)
  useEffect(() => {
    Cookies.set("sidebarOpen", sidebarOpen);
  }, [sidebarOpen]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          isMobile={isMobile}
          handleSidebarToggle={handleSidebarToggle}
          activeTab={activeTab}
        />
        <SwipeableDrawer
          anchor="left"
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onOpen={() => setSidebarOpen(true)}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: isMobile ? "100%" : "240px",
            ".MuiDrawer-paper": { width: isMobile ? "100%" : "240px" },
          }}
        >
          {sidebar}
        </SwipeableDrawer>
        <Box component="main" sx={{ flexGrow: 2, p: 3 }}>
          <Toolbar />
          <Container maxWidth="md">
            <Grid container spacing={isMobile ? 2 : 4}>
              <Grid item xs={12}>
                {content}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;