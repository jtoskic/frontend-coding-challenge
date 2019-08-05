import React from 'react';
import OfficePhoto from './OfficePhoto'


const Grid = (props) => {
    const { name, description, photo } = props
    return (
        <div className='grid'>
            <OfficePhoto
                name={name}
                photo={photo}/>
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