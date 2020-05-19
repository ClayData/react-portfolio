import React from 'react';
import { Card, makeStyles, CardContent, Typography, CardMedia, CardActions } from '@material-ui/core';
import Popout from './Popout';

const useStyles = makeStyles({
    root: {
      marginTop: '1rem',
      minWidth: 275,
      maxWidth: 275,
    },
    media: 
    {
      height: 0,
      paddingTop: '56.25%',
    },
    title: {
      fontSize: '1.5rem',
    },
    body: {
      fontSize: '1rem'
    },
  });

function ProjectCard(props){
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia 
            className={classes.media}
            image={props.image}
            title={props.name}
            />
            <CardContent>
                <Typography className={classes.title}>
                    {props.name}
                </Typography>
                <Typography>
                  {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Popout
                name={props.name}
                github={props.github}
                site={props.site}
                />
            </CardActions>
        </Card>
    )
}

export default ProjectCard;