import React from 'react';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SearchIcon />
      <InputBase
        placeholder="Search…"
        onChange={handleChange}
        sx={{
          ml: 1,
          flex: 1,
        }}
      />
    </Box>
  );
};

export default SearchBar;
