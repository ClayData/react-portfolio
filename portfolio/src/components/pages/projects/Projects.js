import React from 'react';
import Card from './Card';
import data from './projectData.json';
import Wrapper from './Wrapper';
import './Projects.css';


class Projects extends React.Component {
    constructor(props){
    super(props);
    this.state ={
        info: data
    }
}

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                        <div className="col">
                            <Wrapper>
                            {this.state.info.map(project => (
                                <Card 
                                key={project.id}
                                image={project.image}
                                name={project.name}
                                site={project.site}
                                github={project.github}
                                />
                            ))}
                            </Wrapper>     
                        </div>
                    <div className="col-1"></div>
                </div>       
            </div>
        )
    }
}

export default Projects;