import React from 'react';
import AmenitiesCarousel from '../components/AmenitiesCarousel';
import Banner from '../components/Banner';
import amenitiesList from '../data/AmenitiesList';

const Amenities = () => {
    const ulTitle = Object.keys(amenitiesList);

    return (
        <main id="amenities-page">
            
            <Banner text={'Modern Amenities'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'}/>
            
            <section className="inner intro">
                <p>Carronade park homes come fully equipped with all of the modern upgrades 
                you would expect in a five star community. We take it to the next level 
                with maintenance free exclusive amenities for all residents to enjoy and 
                share with friends and family.</p>
            </section>   
            
            <AmenitiesCarousel />

            <section className="amenities-list inner-wide">
                {ulTitle.map((item, index) => {
                    return (      
                        <>
                        <div key={index}>
                            <h2 className="title">{item}</h2>
                            <ul>
                                {amenitiesList[item].map((item, index) => {
                                return (
                                        <li key={index}>
                                            <span>-</span>{item}
                                        </li>
                                )})}
                            </ul>
                        </div>
                        </>
                    )})}
            </section>
        </main>
    )
}

export default Amenities;
