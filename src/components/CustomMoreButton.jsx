import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./customMoreButton.css"

const CustomMoreButton = () => {
  const handleIconClick = () => {
    alert("More Button: Implementation not included!");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon className="moreHorixIcon" />
    </IconButton>
  );
};

export default CustomMoreButton;
