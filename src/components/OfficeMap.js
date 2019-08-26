import React, { Component } from 'react';
import ReactMapGL, { FullscreenControl, NavigationControl } from 'react-map-gl';
import OfficeMarker from "./OfficeMarker";
import OfficeMapPopup from './OfficeMapPopup'


const mapStyle = "mapbox://styles/mapbox/dark-v9"

class OfficeMap extends Component {
    state = {
        viewport: {
            width:'100vw',
            height:'100vh',
            zoom:2,
            bearing: 0,
            pitch: 0
        }
    }

    updateViewport = viewport => {
        this.setState({viewport})
    }

    render() {
        const { viewport } = this.state
        return (
            <div className='office-map'>
                <ReactMapGL
                    {...viewport}
                    onViewportChange={this.updateViewport}
                    mapStyle={mapStyle}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>

                    <OfficeMarker coordinates={this.props.offices}/>

                    <OfficeMapPopup/>

                    <div className="fullscreen-control-style">
                        <FullscreenControl />
                    </div>
                    <div className="nav-style">
                        <NavigationControl />
                    </div>

                </ReactMapGL>
            </div>
        )
    }
}


export default OfficeMap