import React from 'react';
import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center">
            Welcome to our SDEV 265 Group Project
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            This app is designed to help you manage your grocery list and to-do list in one convenient location.
        </Typography>
    </Container>
  );
};

export default HomePage;
