import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Wrapper from './Wrapper';
import data from './projectData.json';




class Projects extends React.Component {
    constructor(props){
    super(props);
    this.state ={
        info: data
    }
}

    render() {
        return(
            <Grid container>
                <Grid item xs={2} />

                <Grid item xs={8}>
                    <Wrapper>
                        {data.map((project) => {
                            return (
                                <ProjectCard 
                                name={project.name}
                                key={project.id}
                                image={project.image}

                                />
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