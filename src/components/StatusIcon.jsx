import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./statusIcon.css"

const StatusIcon = ({ status, statusIcons }) => {
  return (
    <Tooltip title={status} followCursor>
      <img
        src={statusIcons[status]}
        alt={status}
        className="SIimg"
      />
    </Tooltip>
  );
};

export default StatusIcon;
