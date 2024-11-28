import React from "react";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import CircleIcon from "@mui/icons-material/Circle";
import "./featureRequest.css"

const CustomRadio = ({ tag }) => {
  return (
    <Paper style={{ padding: "0.1rem 0.2rem 0.2rem 0.1rem" }}>
      <Radio
        disabled={true}
        icon={<CircleIcon style={{ fontSize: 14 }} />}
        color="default"
        size="small"
        className="FRradio"
      />
      <span className="FRspan">{tag}</span>
    </Paper>
  );
}

export default CustomRadio;
