import React from 'react'
import { Marker } from 'react-map-gl';
import { store } from "../store";
import { showPopup } from "../actions";

const OfficeMarker = ({coordinates}) => {
    return (
        <div className='marker-container'>
            { coordinates.map((office) => {
                return <Marker
                    key={office.id}
                    latitude={parseInt(office.latitude)}
                    longitude={parseInt(office.longitude)}>

                    <div onClick={(e) => {
                        e.preventDefault()
                        store.dispatch(showPopup(office))
                    }}>
                        <img className='location' src="images/location.png" alt=""/>
                    </div>
                </Marker>
            })}
        </div>

    )
}

export default OfficeMarker