import React from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import { Tabs, Map, MapCarousel } from '../components/Neighborhood';
import { TabContextProvider } from '../context/TabContext';
import amenities from '../data/AmenitiesGallery';

const Neighborhood = () => {

    return (
        <TabContextProvider>
        <main id="neighborhood-page">
            
            <Banner text={'explore your neighborhood'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            
            <section className="inner intro">
                <p>Dining, entertainment, shopping, schools are all nearby with Fort Meigs at Levis Apartments. 
                    In Perrysburg, you will find a combination of modern luxuries in a convenient location 
                    providing easy access to major interstates. Look no further for Perrysburg apartments, your new location to call Home</p>
            </section>

            <Carousel images={amenities}/>

            <section className="inner-wide map">
                <Tabs />
                <Map />
            </section>

            <MapCarousel />

        </main>
        </TabContextProvider>
    )
}

export default Neighborhood
