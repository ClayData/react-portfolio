import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Paper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/clayton-ortiz-844340108/" />
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href="https://github.com/ClayData"/>
        <BottomNavigationAction label="Email" icon={<MailOutlineIcon />} href="mailto:claytonortiz96@gmail.com"/>
      </BottomNavigation>
    </Paper>
  );
}