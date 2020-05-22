import React from 'react';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Wrapper from './Wrapper';
import data from './projectData.json';
import "./Wrapper.css";






class Projects extends React.Component {
    constructor(props){
    super(props);
    this.state ={
        info: data
    }
}

    

    render() {
        return(
            <Grid container className='root'>
                <Grid item xs={2} />

                <Grid item xs={8}>
                    <Wrapper>
                        <span id="projectHeader">Projects</span>
                        {data.map((project) => {
                            return (
                                <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1.5
                                }}
                                >    
                                    <ProjectCard 
                                    name={project.name}
                                    key={project.id}
                                    image={project.image}
                                    github={project.github}
                                    site={project.site}
                                    description={project.description}
                                    />
                                </motion.div>    
                                )
                        })}
                    </Wrapper>
                </Grid>

                <Grid item xs={2} />
            </Grid>
        )
    }
}

export default Projects;