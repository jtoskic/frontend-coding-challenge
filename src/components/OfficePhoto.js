import React from 'react';
import { getFirstLetter } from "../Utills/Utility";

const officePhoto = ({name, photo}) => {
    return (
        <div className='office-photo'>
            <div className="img-container">
                <div className="img">
                    {photo ? <img src={photo} alt={name}/> : <div className='no-photo'>{getFirstLetter(name)}</div>}
                </div>
            </div>
        </div>
    )
}

export default officePhoto
