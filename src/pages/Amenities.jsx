import React from 'react';
import AmenitiesCarousel from '../components/AmenitiesCarousel';
import Banner from '../components/Banner';
const Amenities = () => {
    return (
        <div id="amenities-page">
            <Banner text={'Modern Amenities'}/>
            <div className="inner">
                <AmenitiesCarousel />
                <ul className="amenities-list">
                    <li>Each townhome rents for $1750/mo plus utilities</li>
                    <li>Exremely spacious two story design</li>
                    <li>3 Bedrooms / 2.5 Baths</li>
                    <li>Gourmet kitchen with island and pantry</li>
                    <li>Granite countertops throughout</li>
                    <li>Stainless steel kitchen appliances all included</li>
                    <li>Individual full size garage</li>
                    <li>Separate laundry room with full size front load washer & dryer</li>
                    <li>Master suite with private bath and walk-in closet</li>
                    <li>Painted trim and doors</li>
                    <li>Individual driveway, patio, and yard space</li>
                    <li>High speed internet available</li>
                    <li>Conveniently located near Levis Commons and I-75 / 475 / US-23</li>
                    <li>Lawn care and snow removal is included</li>
                    <li>Locally owned and managed</li>
                    <li>Brand new construction</li>
                </ul>
            </div>
        </div>
    )
}

export default Amenities;
