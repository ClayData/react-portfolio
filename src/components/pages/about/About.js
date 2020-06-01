import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid}from '@material-ui/core';
import Projects from '../projects/Projects';
import Holder from './Holder'
import './About.css';

const useStyles = makeStyles({
    root:{
        
        background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(35,191,198,1) 40%, rgba(45,164,253,1) 100%)",
        minHeight: '47rem',  
    },
    card: {
      margin: '2rem',
      minWidth: 275,
      background: "rgb(244, 247, 249)"
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
            <Projects />
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Holder className={classes.holder}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title}>
                                        About Me
                                    </Typography>
                                    <Typography className={classes.body}>
                                    I am a Full Stack Web Developer passionate about building responsive and robust web applications. 
                                    Educated at the University of Minnesota Twin-Cities, obtaining a certificate in Full-Stack Web Development and a B.S. in Applied Economics. I’m skilled in web technologies including HTML, CSS, JavaScript, Node.js and React. 
                                    My experiences with databases include both SQL and NoSql variates. 
                                    I am excited to work on and solve new challenges everyday. 
                                    Working in a team is my favorite way to build a project. 
                                    Being able to communicate with the others on my team helps me invent creative solutions. 
                                    While working entirely remotely on a project team, I was able to come up with a way to implement authentication after talking with one of my teammates.  
                                    
                                    </Typography>
                                    <Typography className={classes.body2}>
                                    My belief is to always be striving to learn and improve so I can become an even better developer. In my free time I enjoy reading, watching sports and socializing with friends. Please reach out to me with any questions you may have via email. 
                                    The combination of my technical skills and ability to collaborate in a deadline-driven environment make me a strong addition to all kinds of development teams.
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Holder>
                        </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
        </div>
    )
}

export default About;