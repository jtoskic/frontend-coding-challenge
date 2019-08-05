import React from 'react';
import { getFirstLetter } from "../Utills/Utility";

const List = (props) => {
    const { name, description, photo } = props
    return (
        <div className='list'>
            <div className="img-container">
                <div className="img">
                    {photo ? <img src={photo} alt={name}/> : <div className='no-photo'>{getFirstLetter(name)}</div>}
                </div>
            </div>
            <div className="list-content">
                <h3 className='name'>{name}</h3>
                <p className='desc'>{description}</p>
            </div>
        </div>
    )
}
export default List