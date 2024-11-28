import React from "react";
import "./navbar.css"
import {
  Paper,
  Button,
  Select,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { useAppState } from "../AppStateContext";

import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    body1: {
      fontSize: "0.8rem",
    },
  },
});

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { selectedOptions, updateSelectedOptions } = useAppState(); 

  const handleChange1 = (event) => {
    updateSelectedOptions(event.target.value, selectedOptions.ordering); 
  };

  const handleChange2 = (event) => {
    updateSelectedOptions(selectedOptions.grouping, event.target.value); 
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={0}
        className="Npaper"
      >
      <Paper
        className="Npaper2"
      >
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        startIcon={<TuneIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        size="small"
        style={{ fontSize: "12px" }}
      >
        Display
      </Button>
      </Paper>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        style={{ marginTop: "10px" }}
      >
      <MenuItem className="menuItem">
        Grouping
        <Select
          value={selectedOptions.grouping}
          onChange={handleChange1}
          className="sel"
          size="small"
        >
          <MenuItem value="status">Status</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="priority">Priority</MenuItem>
        </Select>
      </MenuItem>
          <MenuItem className="menuItem">
            Ordering
            <Select
              value={selectedOptions.ordering}
              onChange={handleChange2}
              className="sel"
              size="small"
            >
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="title">Title</MenuItem>
            </Select>
          </MenuItem>
        </Menu>
      </Paper>
    </ThemeProvider>
  );
}

export default Navbar;
