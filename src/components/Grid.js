import React from 'react';
import { getFirstLetter } from "../Utills/Utility";

const Grid = (props) => {
    const { name, description, photo } = props
    return (
        <div className='grid'>
            <div className="img-container">
                <div className="img">
                    {photo ? <img src={photo} alt={name}/> : <div className='no-photo'>{getFirstLetter(name)}</div>}
                </div>
            </div>
            ​
            <div className="name">
                <h3>{name}</h3>
            </div>
            ​
            <div className="info">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Grid