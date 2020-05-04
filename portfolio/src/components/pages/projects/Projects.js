import React from 'react';
import Card from './Card';
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
            <div className="container">
                {this.state.info.map(project => (
                    <Card 
                    key={project.id}
                    image={project.image}
                    name={project.name}
                    site={project.site}
                    github={project.github}
                    />
                ))}
                
            </div>
        )
    }
}

export default Projects;