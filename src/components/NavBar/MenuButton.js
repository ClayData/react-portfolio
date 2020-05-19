import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from "react-router-dom";



export default function MenuButton() {
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
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
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
        <MenuItem onClick={handleClose}>
        <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1twz4VAeTmXRg2l4HSdKbrvz8iKt4rV_YuPWSHY27Nnc/export?format=pdf" 
           className="nav-link"
          >Resume</a>
        </MenuItem>
      </Menu>
    </div>
  );
}