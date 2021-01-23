import React, { useState } from 'react';
import MapTab from '../components/MapTab';
import Banner from '../components/Banner';
import maps from '../data/Neighborhood';

const Neighborhood = () => {
    const [tab, setTab] = useState('Shopping');
    const categories = Object.keys(maps);

    return (
        <div id="neighborhood-page">
            <Banner text={'explore your neighborhood'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            <div className="inner">
                <ul className="tabs">
                    {categories.map((item) => (
                        <li key={item}><button onClick={()=> setTab(item)}>{item}</button></li>
                    ))}
                </ul>
                <MapTab map={maps[tab]}/>
            </div>
        </div>
    )
}

export default Neighborhood
