import React from 'react';
import OfficePhoto from './OfficePhoto'

const Grid = ({offices}) => {
    return (
        <div className='grid-container wrapper'>
            {
                offices.map((office) => {
                    return (
                        <div className='grid' key={office.id}>
                            <OfficePhoto
                                key={office.id}
                                name={office.name}
                                photo={office.photo}/>
                            ​
                            <div className="name">
                                <h3>{office.name}</h3>
                            </div>
                            ​
                            <div className="info">
                                <p>{office.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Grid