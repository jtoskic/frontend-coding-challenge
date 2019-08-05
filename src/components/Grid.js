import React from 'react';

const Grid = (props) => {
    const { name, description, photo } = props
    return (
        <div className='grid'>
            <p>{description}</p>
        </div>
    )
}

export default Grid