import React, { useState, useEffect } from 'react'
import { Popup, Marker } from 'react-mapbox-gl';
import maps from '../../data/Neighborhood';
import Distance from './Distance';

const Markers = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === 'Escape') setSelected(null);
        };
        window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, []);
    
    return (
        <>
        { maps.Shopping.markers.map( marker  => (
            <Marker 
                key={marker.name}
                coordinates={marker.coordinates}
            >    
                <button className="marker" onClick={ () => setSelected(marker)}>
                    <i className="fas fa-shopping-bag"></i>
                    <span className='hide'>shopping</span>
                </button>
                <p>{marker.name}</p>
            </Marker>
        ))}

        {selected && 
            <Popup coordinates={selected.coordinates}>
                <button className="close" onClick={() => setSelected(null)}>
                    &times;
                    <span className='hide'>close popup</span>
                </button>
                <p className='title'>
                    <a href={selected.google_url} target="_blank" rel="noreferrer">
                        {selected.name}
                    </a>
                </p>
                <p>{selected.address}</p>
                <Distance distance={selected.distance} bike={selected.bike} car={selected.car} />
            </Popup>
        }</>
    )
}

export default Markers
