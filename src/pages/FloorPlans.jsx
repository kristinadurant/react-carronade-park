import React from 'react';
import Banner from '../components/Banner';
import { FloorPlan, LightBox } from '../components/FloorPlans';
import { oneFloor, twoFloors } from '../data/FloorPlans';

const FloorPlans = () => {

    return (
        <main id="floor-plans-page">

            <Banner text={'Floor Plans'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'}/>
            
            <section className="inner intro">
                <p>Floorplans are available for two groups of apartments, Fort Meigs at Levis and Williamsburg West. 
                Below please find the floor plans for each of various apartment homes.</p>
            </section>

            <section id='floor-plans-blocks' className="inner">
                <div className="container">
                    <h2>One Floor Homes</h2>
                    <FloorPlan floorPlan={oneFloor} />         
                </div>
                <div className="container">
                    <h2>Two Floors Homes</h2>                
                    <FloorPlan floorPlan={twoFloors} />
                </div>
            </section>

            <LightBox images={[...oneFloor.images, ...twoFloors.images]}/>
        </main>
    )
}

export default FloorPlans;
