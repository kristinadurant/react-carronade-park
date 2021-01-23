import React from 'react';
import MapCarousel from './MapCarousel';

const MapTab = ({ map }) => {

    return (
        <>
            <div className="map-container">
                <iframe frameborder="0" src={map.url} width="100%" height="480"></iframe>
            </div>
            <MapCarousel markers={map.markers}/>
        </>
    )
}

export default MapTab;
