import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const ShareButton = ({ listItems }) => {
  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'My List',
          text: 'Check out my list!',
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Sharing is not supported on this platform.');
    }
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
