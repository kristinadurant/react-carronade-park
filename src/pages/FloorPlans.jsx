import React from 'react';
import Banner from '../components/Banner';
import FloorPlan from '../components/FloorPlan';
import { SRLWrapper } from "simple-react-lightbox";

const FloorPlans = () => {
    const options = {
        settings: {
            disableKeyboardControls: true,
            disableWheelControls: true,
            overlayColor: '#030304eb'
        },
        thumbnails: {
            showThumbnails: false
        },
        buttons: {
            showAutoplayButton: false,
            showFullscreenButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
            backgroundColor: 'transparent'
        }
    }
    const images1 = [
        { 
            id: 0,
            url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg',
            alt: 'One Floor Home'
        }
    ];
    const images2 = [
        {
            id: 1,
            url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611351497/Floor%20Plans/first_floor_1_gaw1v5.jpg',
            alt: 'First Floor'
        },
        {
            id: 2,
            url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611351495/Floor%20Plans/second_floor_1_rachlw.jpg',
            alt: 'Second Floor'
        }
    ]

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
                    <FloorPlan images={images1} />         
                </div>
                <div className="container">
                    <h2>Two Floors Homes</h2>                
                    <FloorPlan images={images2} />
                </div>
            </section>
            <section id="floor-plans-modal" style={{display: 'none'}}>
                <SRLWrapper options={options}>
                {[...images1, ...images2].map((item) => (
                    <a href={item.url} key={item.id}>
                        <img src={item.url} alt={item.alt} />
                    </a>
                ))}
                </SRLWrapper>
            </section>
        </main>
    )
}

export default FloorPlans;
