import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getFirstLetter } from "../Utills/Utility";


const OfficeMap = (props) => {
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
                mapboxApiAccessToken={"pk.eyJ1IjoidGpvdmFuIiwiYSI6ImNqeXk5eDczYjE5cWozbW1wcDh2NWdxZngifQ.R9w90fEKjDA8JnuEBDHAYA"}>

                { props.coordinates.map((office) => {
                    return <Marker
                            key={office.id}
                            latitude={parseInt(office.latitude)}
                            longitude={parseInt(office.longitude)}>

                            <div onClick={(e) => {
                                    e.preventDefault()
                                    setSelectedOffice(office)
                                }}>
                                    <img className='location' src="images/location.png" alt=""/>
                                </div>
                            </Marker>
                })}
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