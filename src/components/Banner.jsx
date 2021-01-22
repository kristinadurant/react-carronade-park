import React from 'react';
import Background from '../images/IMG_1654.jpg';

const Banner = ({image, text}) => {
    return (
        <>
            <div>
                <div className="banner-image" style={{backgroundImage: `url(${Background})`}}></div>
            </div>
            <h1 className="banner-text">
                {text}
            </h1>
        </>
    )
}

export default Banner
