import React, { useState } from 'react';
import MapCarousel from '../components/Neighborhood/MapCarousel';
import Banner from '../components/Banner';
import maps from '../data/Neighborhood';
import AmenitiesCarousel from '../components/AmenitiesCarousel';
import Map from '../components/Neighborhood/Map';

const Neighborhood = () => {
    const [tab, setTab] = useState(null);
    const categories = Object.keys(maps);

    return (
        <main id="neighborhood-page">
            <Banner text={'explore your neighborhood'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            <section className="inner intro">
                <p>Dining, entertainment, shopping, schools are all nearby with Fort Meigs at Levis Apartments. 
                    In Perrysburg, you will find a combination of modern luxuries in a convenient location 
                    providing easy access to major interstates. Look no further for Perrysburg apartments, your new location to call Home</p>
            </section>
            <section className="carousel bg-grey">
                <AmenitiesCarousel />
            </section>
            <section className=" map">
                <ul className="tabs">
                    {categories.map((item) => (
                        <li key={item}>
                            <button onClick={()=> setTab(item)}>
                                <span>{item}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="map-container">
                    <Map category={tab} />
                </div>
            </section>
            {tab &&
                <section style={{maxWidth: '100%', margin: 'auto'}}>
                    <MapCarousel markers={maps[tab].markers}/>     
                </section>
            }
        </main>
    )
}

export default Neighborhood
