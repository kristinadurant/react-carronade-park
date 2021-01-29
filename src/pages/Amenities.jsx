import React from 'react';
import AmenitiesCarousel from '../components/AmenitiesCarousel';
import Banner from '../components/Banner';
import amenitiesList from '../data/AmenitiesList';

const Amenities = () => {
    console.log(amenitiesList)
    return (
        <div id="amenities-page">
            <Banner text={'Modern Amenities'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'}/>
            <section className="inner intro">
                <p>Carronade park homes come fully equipped with all of the modern upgrades 
                you would expect in a five star community. We take it to the next level 
                with maintenance free exclusive amenities for all residents to enjoy and 
                share with friends and family.</p>
            </section>
            <section className="carousel">    
                <AmenitiesCarousel />
            </section>
            <section className="amenities-list">
                <ul>
                    {amenitiesList.map((item, index) => {
                       return (
                            <li key={index}>
                                <i className="fas fa-angle-double-right"></i>
                                {item}
                            </li>
                       )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Amenities;
