import React from 'react';
import Banner from '../components/Banner';

const FloorPlans = () => {
    return (
        <div id="floor-plans-page">
            <Banner text={'Floor Plans'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'}/>
            <section id='floor-plans-blocks' className="inner">
                <div>
                    <div className="img-wrapper">
                        <img 
                            src='https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg'
                            alt='One Floor Home Floor Plan'
                        />
                    </div>
                    <h2>One Floor Homes</h2>
                </div>
                <div>
                    <div className="img-wrapper">
                        <img 
                            src='https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg'
                            alt='One Floor Home Floor Plan'
                        />
                        <img 
                            src='https://res.cloudinary.com/carronadepark/image/upload/v1611351495/Floor%20Plans/second_floor_1_rachlw.jpg'
                            alt='One Floor Home Floor Plan'
                        />
                    </div>
                    <h2>Two Floors Homes</h2>
                </div>
            </section>
        </div>
    )
}

export default FloorPlans;
