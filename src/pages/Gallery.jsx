import React, { useState } from 'react';
import Banner from '../components/Banner';
import images from '../data/Gallery';

const Gallery = () => {
    const [lightBox, setLightBox] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);

    let counter = 0;
    const order = () => {
        counter===4? counter=1 : counter++;
        return counter
    }

    return (
        <div id="gallery-page">
            <Banner text={'Gallery of '} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'}/>
            <div className="grid-container">
                {images.map(( image ) => {
                    return (
                        <div style={{order: order()}} key={image.id}>
                            <img className="landscape" src={image.url}></img>
                            <button onClick={() => { 
                                setLightBox(true); 
                                setCurrentImg(image.id-1);
                            }}/>
                        </div>
                    )}
                )}
            </div>
            {lightBox &&
                <div className="light-box">
                    <div className="overlay" onClick={()=> setLightBox(false)}></div>
                    {currentImg>0 && <button onClick={() => setCurrentImg(currentImg-1)}>prev</button>}
                    <img src={images[currentImg].url} />
                    {currentImg<images.length-1 && <button onClick={() => setCurrentImg(currentImg+1)}>next</button>}
                </div>
                
            }
        </div>
    )
}

export default Gallery
