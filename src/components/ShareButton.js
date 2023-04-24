import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const ShareButton = ({ onShare }) => {
  const handleClick = () => {
    onShare();
  };

  return (
    <Tooltip title="Share">
      <IconButton aria-label="share" size="small" onClick={handleClick}>
        <ShareIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ShareButton;
