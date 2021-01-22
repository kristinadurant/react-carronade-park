import React from 'react';
import Background from '../images/IMG_1654.jpg';

const Banner = ({image, text}) => {
    return (
        <>
            <div className="banner-image" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <div className="banner-text">
                {text}
            </div>
        </>
    )
}

export default Banner
