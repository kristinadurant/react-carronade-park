import React from 'react';
import Banner from '../components/Banner';
import FloorPlan from '../components/FloorPlan';

const FloorPlans = () => {

    const images1 = [
        'https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg'
    ];
    const images2 = [
        'https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611351495/Floor%20Plans/second_floor_1_rachlw.jpg'
    ]

    return (
        <div id="floor-plans-page">
            <Banner text={'Floor Plans'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'}/>
            <section className="inner intro">
            <p>Floorplans are available for two groups of apartments, Fort Meigs at Levis and Williamsburg West. 
            Below please find the floor plans for each of various apartment homes.</p>
            </section>
            <section id='floor-plans-blocks' className="inner">
                <div>
                    <h2>One Floor Homes</h2>
                    <FloorPlan images={images1} />
                </div>
                <div>
                    <h2>Two Floors Homes</h2>                
                    <FloorPlan images={images2} />
                </div>
            </section>
        </div>
    )
}

export default FloorPlans;
