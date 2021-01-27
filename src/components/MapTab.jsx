import React from 'react';
import MapCarousel from './MapCarousel';

const MapTab = ({ map }) => {

    return (
        <>
            <div className="map-container">
                <iframe frameborder="0" src={map.url} width="100%" height="480"></iframe>
            </div>
            <MapCarousel markers={map.markers}/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15445.803024175251!2d-80.14268685422681!3d25.787713824447035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b485c7f1c2f7%3A0x39b9df6194faf4b2!2sApple%20Lincoln%20Road!5e0!3m2!1sen!2sus!4v1611534348330!5m2!1sen!2sus" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </>
    )
}

export default MapTab;
