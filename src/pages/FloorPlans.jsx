import React from 'react';
import Banner from '../components/Banner';

const FloorPlans = () => {
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
                    <div className="img-wrapper">
                        <img 
                            src='https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg'
                            alt='One Floor Home Floor Plan'
                        />
                    </div>               
                    <p className='details'>
                        <span>1 BED</span>
                        <span>1 BATH</span>
                        <span>700 SF</span>
                    </p>
                    <a className='button' href='#' target='_blank' rel='noreferrer'>
                        DOWNLOAD
                    </a>
                </div>
                <div>
                    <h2>Two Floors Homes</h2>                
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
                    <p className='details'>
                        <span>3 BED</span>
                        <span>2.5 BATH</span>
                        <span>700 SF</span>
                    </p>
                    <a className='button' href='#' target='_blank' rel='noreferrer'>
                        DOWNLOAD
                    </a>    
                </div>
            </section>
        </div>
    )
}

export default FloorPlans;
