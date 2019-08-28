import React from 'react';
import OfficePhoto from "./OfficePhoto.js";

const List = ({offices}) => {
    return (
        <div className='list-container wrapper'>
            {
                offices.map((office) => {
                    return (
                        <div className='list' key={office.id}>
                            <OfficePhoto
                                name={office.name}
                                photo={office.photo}/>

                            <div className="list-content">
                                <h3 className='name'>{office.name}</h3>
                                <p className='desc'>{office.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List