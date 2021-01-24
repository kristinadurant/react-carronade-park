import React from 'react';
import AmenitiesCarousel from '../components/AmenitiesCarousel';
import Banner from '../components/Banner';
import amenitiesList from '../data/AmenitiesList';

const Amenities = () => {
    console.log(amenitiesList)
    return (
        <div id="amenities-page">
            <Banner text={'Modern Amenities'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'}/>
            <div className="inner">
                <p>Modern Open Floor Plan, Granite Countertops, Garage Included, Full Size Washer and Dryer Included!</p>
                <AmenitiesCarousel />
                <ul className="amenities-list">
                    {amenitiesList.map((item, index) => {
                       return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Amenities;
