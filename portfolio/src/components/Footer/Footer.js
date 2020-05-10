import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction, Paper, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 'auto',
  },
  footer: {
    borderTop: '1px solid slategray',
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid container>
      
        <Grid item xs={12} className={classes.footer}>
          <Paper elevation={0}>
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
        </Grid>
      
    </Grid>
  );
}