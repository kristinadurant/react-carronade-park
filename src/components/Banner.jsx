import React from 'react';
import { HashLink } from 'react-router-hash-link';
import BannerCarousel from './BannerCarousel';

const Banner = ({ text, image }) => {
    return (
        <section className="banner">
            <div className="banner-carousel-container">
                {image 
                ? 
                    <div className='bg-img' style={{backgroundImage: `url(${image})`, height: '100%'}}>
                        <span className='hide'>{text}</span>
                    </div>
                : <BannerCarousel />
                }
            </div>
            <div className="banner-text">
                <HashLink smooth to='#main'>
                    <span className='hide'>scroll to main content</span>
                </HashLink>
                <h1 id='main'>{text}</h1>
            </div>  
         </section>
    )
}

export default Banner
