import React from 'react';
import OfficePhoto from "./OfficePhoto.js";


const List = (props) => {
    const { name, description, photo } = props
    return (
        <div className='list'>

            <OfficePhoto
                name={name}
                photo={photo}/>

            <div className="list-content">
                <h3 className='name'>{name}</h3>
                <p className='desc'>{description}</p>
            </div>
        </div>
    )
}


export default List