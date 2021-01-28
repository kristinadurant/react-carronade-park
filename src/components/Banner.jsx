import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Banner = ({image, text}) => {
    return (
        <div className="banner">
            <div className="banner-image" style={{backgroundImage: `url(${image})`}}>
                <div id ='main' className="banner-text">
                    <HashLink smooth to='#main'>
                        <i class="fas fa-chevron-down"></i>
                    </HashLink>
                    <h1>{text}</h1>
                </div>  
                
            </div>
         </div>
    )
}

export default Banner
