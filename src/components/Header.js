import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ isMobile, handleSidebarToggle, activeTab }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleSidebarToggle}
        >
          <MenuIcon />
        </IconButton>
        {!isMobile && (
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {activeTab}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};


export default Header;