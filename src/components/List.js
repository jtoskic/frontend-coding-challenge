import React from 'react';

const List = (props) => {
    const { name, description, photo } = props
    return (
        <div className='list'>
            <p>{name}</p>
        </div>
    )
}

export default List