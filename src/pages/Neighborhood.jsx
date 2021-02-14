import React from 'react';
import Banner from '../components/Banner';
import AmenitiesCarousel from '../components/AmenitiesCarousel';
import { Tabs, Map, MapCarousel } from '../components/Neighborhood';

const Neighborhood = () => {

    return (
        <main id="neighborhood-page">
            
            <Banner text={'explore your neighborhood'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            
            <section className="inner intro">
                <p>Dining, entertainment, shopping, schools are all nearby with Fort Meigs at Levis Apartments. 
                    In Perrysburg, you will find a combination of modern luxuries in a convenient location 
                    providing easy access to major interstates. Look no further for Perrysburg apartments, your new location to call Home</p>
            </section>

            <AmenitiesCarousel />

            <section className="inner-wide map">
                <Tabs />
                <Map />
            </section>

            <MapCarousel />

        </main>
    )
}

export default Neighborhood
