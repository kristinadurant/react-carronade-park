import React, { useState } from 'react';
import MapCarousel from '../components/MapCarousel';
import Banner from '../components/Banner';
import maps from '../data/Neighborhood';

const Neighborhood = () => {
    const [tab, setTab] = useState('Shopping');
    const categories = Object.keys(maps);

    return (
        <div id="neighborhood-page">
            <Banner text={'explore your neighborhood'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            <section className="inner intro">
                <p>Dining, entertainment, shopping, schools are all nearby with Fort Meigs at Levis Apartments. 
                    In Perrysburg, you will find a combination of modern luxuries in a convenient location 
                    providing easy access to major interstates. Look no further for Perrysburg apartments, your new location to call Home</p>
            </section>
            <section className="inner-wide map">
                <ul className="tabs">
                    {categories.map((item) => (
                        <li key={item}>
                            <button onClick={()=> setTab(item)}>
                                <i className="fas fa-angle-double-right"></i>
                                <span>{item}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="map-container">
                    <iframe frameborder="0" src={maps[tab].url} width="100%" height="480"></iframe>
                </div>
            </section>
            <section style={{maxWidth: '90%', margin: 'auto'}}>
                <MapCarousel markers={maps[tab].markers}/>     
            </section>
        </div>
    )
}

export default Neighborhood
