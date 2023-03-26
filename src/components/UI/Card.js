import React from "react";

const Card = (props)=> {
    return(
        <div className="card mb-4">
            <div className="card-header"> <h5 className="m-0"> {props.title} </h5> </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card;