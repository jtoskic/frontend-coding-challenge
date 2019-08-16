import React from 'react'
import { Popup } from 'react-map-gl';
import { getFirstLetter } from "../Utills/Utility";
import { store } from "../store";
import { showPopup } from "../actions";


const OfficeMapPopup = () => {
    const selectedOffice = store.getState().showSelectedOffice
    return  (
        <div className='popup-container'>
            { selectedOffice ? (
                    <Popup
                        latitude={parseInt(selectedOffice.latitude)}
                        longitude={parseInt(selectedOffice.longitude)}
                        onClose={() => {
                            store.dispatch(showPopup(null))
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
        </div>
    )
}

export default OfficeMapPopup