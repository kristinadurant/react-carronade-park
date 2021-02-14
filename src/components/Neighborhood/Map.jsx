import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { Markers } from '../Neighborhood';

const Map = () => {

    const Mapbox = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN,

    })

    return (
        <div className="map-container">
            <Mapbox 
                style="mapbox://styles/kristina990/ckl06ynxz09d017n3yb0my541"
                containerStyle={{ height: '40vw', width: '100%' }}
                center={[-83.60881, 41.54275]}
                zoom={[12]}
            >
                <Marker
                    coordinates={[-83.60881, 41.54275]}
                    anchor="bottom">
                    <i className="fas fa-home"></i>
                    <p>You are here</p>          
                </Marker>
                <Markers />
            </Mapbox>
        </div>
    )
}

export default Map;

 


 

 
