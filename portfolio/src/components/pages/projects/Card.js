import React from 'react';

function Card(props){
    return(
        <div>
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                    <p>{props.name}</p>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button> 
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <a role="button" className="btn btn-secondary" href={props.site}>Site</a>
                        <a role="button" className="btn btn-primary" href={props.github}>Git Repo</a>
                    </div>
                    </div>
                </div>
                </div>
        </div>

        
    )
}

export default Card;