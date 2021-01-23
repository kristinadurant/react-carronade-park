import React from 'react';

const Banner = ({image, text}) => {
    return (
        <>
            <div>
                <div className="banner-image" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <h1 className="banner-text">
                {text}
            </h1>
        </>
    )
}

export default Banner
