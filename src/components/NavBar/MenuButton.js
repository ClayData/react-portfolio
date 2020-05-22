import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: 'black',
    textDecoration: 'none'
  }
})

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

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
        <a href="https://github.com/ClayData" className={classes.link}>GitHub</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="https://www.linkedin.com/in/clayton-ortiz-844340108/" className={classes.link}>LinkedIn</a>
        </MenuItem> 
        <MenuItem onClick={handleClose}>
        <a href="mailto:claytonortiz96@gmail.com" className={classes.link}>Contact</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1twz4VAeTmXRg2l4HSdKbrvz8iKt4rV_YuPWSHY27Nnc/export?format=pdf" 
           className={classes.link}
          >Resume</a>
        </MenuItem>
      </Menu>
    </div>
  );
}