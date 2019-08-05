import React from 'react';

const OfficeMap = (props) => {
    const { lat, lng } = props
    return (
        <div className='office-map'>
            <p>{lat}</p>
        </div>
    )
}

export default OfficeMap