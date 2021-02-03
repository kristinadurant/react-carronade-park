import React from 'react';
import { HashLink } from 'react-router-hash-link';
import BannerCarousel from './BannerCarousel';

const Banner = ({ text }) => {
    return (
        <section className="banner">
            <BannerCarousel />
            <div id ='main' className="banner-text">
                <HashLink smooth to='#main'>
                    <i class="fas fa-chevron-down"></i>
                </HashLink>
                <h1>{text}</h1>
            </div>  
         </section>
    )
}

export default Banner
