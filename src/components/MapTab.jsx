import React from 'react';

const MapTab = ({ map, active }) => {
    console.log(active);
    return (
        <>
            <div className="map-container">
                <iframe frameborder="0" src={map.url} width="100%" height="480"></iframe>
            </div>
        </>
    )
}

export default MapTab;
