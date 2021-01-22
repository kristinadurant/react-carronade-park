import React, { useState } from 'react';
import Banner from '../components/Banner';

const Gallery = () => {
    const [lightBox, setLightBox] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);

    const images = [
        { id: 1, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'},
        { id: 2, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1653_Large_psjvht.jpg'},
        { id: 3, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'},
        { id: 4, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg'},     
        { id: 5, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1715_Large_otojvp.jpg'},     
        { id: 6, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg'},
        { id: 7, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'},
        { id: 8, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1653_Large_psjvht.jpg'},
        { id: 9, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg'},
        { id: 10, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg'},
        { id: 11, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'},     
        { id: 12, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1715_Large_otojvp.jpg'}, 
        { id: 13, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'},
        { id: 14, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1653_Large_psjvht.jpg'},
        { id: 15, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'},     
        { id: 16, url: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1715_Large_otojvp.jpg'}
    ];
    const images2 = [
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1714_Large_djfvsb.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1657_Large_rtl4di.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1714_Large_djfvsb.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1657_Large_rtl4di.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1717_Large_ipa2mp.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1714_Large_djfvsb.jpg',
        'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1657_Large_rtl4di.jpg',
    ]
    let counter = 0;
    const order = () => {
        counter===4? counter=1 : counter++;
        return counter
    }

    return (
        <div id="gallery-page">
            <Banner text={'Gallery of '}/>
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
                        // <div style={{backgroundImage: `url(${image})`}}></div>
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
