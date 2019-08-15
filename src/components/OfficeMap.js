import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import { getFirstLetter } from "../Utills/Utility";
import OfficeMarker from "./OfficeMarker";


const OfficeMap = ({coordinates}) => {
    const [ viewport, setViewport ] = useState({
        width:'100vw',
        height:'85vh',
        zoom:1
    })

    const [ selectedOffice, setSelectedOffice ] = useState(null)

    return (
        <div className='office-map'>
            <ReactMapGL
                {...viewport}
                onViewportChange={viewport => {setViewport(viewport)}}
                mapStyle="mapbox://styles/tjovan/cjyybvxlx07861doe1u3mbazm"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>

                <OfficeMarker coordinates={coordinates} setSelectedOffice={setSelectedOffice}/>

                { selectedOffice ? (
                    <Popup
                        latitude={parseInt(selectedOffice.latitude)}
                        longitude={parseInt(selectedOffice.longitude)}
                        onClose={() => {
                            setSelectedOffice(null)
                        }}>
                        <div className='popup-container'>
                            <h3>{selectedOffice.name}</h3>
                            { selectedOffice.photo ?
                                <img className='office-img' src={selectedOffice.photo} alt='#'/>
                                :
                                <div className='no-photo'>{getFirstLetter(selectedOffice.name)}</div> }
                        </div>
                    </Popup>
                ) :
                    null
                }
            </ReactMapGL>
        </div>
    )
}


export default OfficeMap