import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useLocation } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/about" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
            Projects
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="mailto:claytonortiz96@gmail.com" className="nav-link">Contact</a>
        </MenuItem>
      </Menu>
    </div>
  );
}