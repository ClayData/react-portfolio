import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Paper}from '@material-ui/core';
import './About.css';

const useStyles = makeStyles({
    root:{
        backgroundColor: 'rgb(56, 199, 209)',
        minHeight: '47rem',  
    },
    card: {
      margin: '2rem',
      minWidth: 275,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    title: {
      fontSize: '2rem',
    },
    body: {
      fontSize: '1rem'
    },
    body2: {
        marginTop: '1rem'
    },
  });

function About() {
   const classes = useStyles();
   

    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper className='holder' elevation={5}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title}>
                                        About Me
                                    </Typography>
                                    <Typography className={classes.body}>
                                    I am a Full Stack Web Developer passionate about building web applications. 
                                    Educated at the University of Minnesota Twin-Cities, obtaining a certificate in Full-Stack Web Development and a B.S. in Applied Economics. 
                                    I’m skilled in web technologies including HTML, CSS, JavaScript, Node.js and React. 
                                    My experiences with databases include both SQL and NoSql variates. 
                                    The combination of my technical skills and ability to collaborate in a deadline-driven environment make me a strong addition to all kinds of development teams. I am excited to work on and solve new challenges everyday. 
                                    
                                    </Typography>
                                    <Typography className={classes.body2}>
                                    My belief is to always be striving to learn and improve so I become an even better developer.
                                    In my free time not coding I enjoy reading, lifting weights and hanging with friends. Please reach out to me with any questions you may have via email.
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Paper>
                        </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
        </div>
    )
}

export default About;