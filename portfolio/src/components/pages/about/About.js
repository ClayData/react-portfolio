import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Paper, CardMedia }from '@material-ui/core';
import Image from '../../assets/aboutpic.jpg';


const useStyles = makeStyles({
    root: {
      marginTop: '1rem',
      minWidth: 275,
    },
    media: 
    {
      height: 0,
      paddingTop: '56.25%',
    },
    title: {
      fontSize: '2rem',
    },
    body: {
      fontSize: '1rem'
    },
    paper: {
        alignSelf: 'center',
        textAlign: 'center'
    }
  });

function About() {
   const classes = useStyles();
   

    return(
        <Grid container >
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardMedia 
                    className={classes.media}
                    title='Clayton Ortiz'
                    image={Image}
                    />
                    Hello
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title}>
                                About Me
                            </Typography>
                            <Typography className={classes.body}>
                            Full Stack Web Developer passionate about building responsive and robust web applications. 
                            Educated at the University of Minnesota Twin-Cities, obtaining a certificate in Full-Stack Web Development and a B.S. in Applied Economics. Skilled in web technologies including HTML, CSS, JavaScript, Node.js and React. Experience utilizing both SQL and NoSql databases. 
                            Created a full stack web application to simulate a tour of the NY Met Museum. The combination of my technical skills and ability to collaborate in a deadline-driven environment make me a strong addition to all kinds of development teams. 
                            I am excited to work on and solve new challenges everyday. My belief is to always be striving to learn and improve so I become an even better developer. 
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={2}>

            </Grid>
        </Grid>
        
    )
}

export default About;