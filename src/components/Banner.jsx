import React from 'react';

const Banner = ({image, text}) => {
    return (
        <div className="banner">
            <div className="banner-image" style={{backgroundImage: `url(${image})`}}>
                <h1 className="banner-text">{text}</h1>
            </div>
         </div>
    )
}

export default Banner
