import React, { useState, useEffect, useContext } from 'react';
import { Popup, Marker } from 'react-mapbox-gl';
import maps from '../../data/Neighborhood';
import { Distance } from '../Neighborhood';
import { TabContext } from '../../context/TabContext';
import { Spring } from 'react-spring/renderprops';

const Markers = () => {
    const { tab } = useContext(TabContext);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === 'Escape') setSelected(null);
        };
        window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, []);

    useEffect(() => setSelected(null), [tab]); 
    //removing selected marker on tab change

    
    return (
        <>
        { maps[tab].markers.map( marker  => (           
            <Marker 
                key={marker.name}
                coordinates={marker.coordinates}
            >    <Spring from={{ marginBottom: 20}} to={{marginBottom: 0}}>
                {props =>
                <button style={props} className="marker" onClick={ () => setSelected(marker)}>
                    <i className={`fas ${marker.icon}`}></i>
                    <span className='hide'>shopping</span>
                </button>
                }
                </Spring>
                <Spring from={{ opacity: 0}} to={{opacity: 1}}>
                    {props => <p style={props}>{marker.name}</p>}
                </Spring>
                
            </Marker>       
        ))}

        {selected && 
            <Popup coordinates={selected.coordinates} className='popup'>
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
                <Distance distance={selected.distance} bike={selected.bike} car={selected.car} walk={selected.walk}/>
            </Popup>
        }</>
    )
}

export default Markers
