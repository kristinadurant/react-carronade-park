import React from 'react';
import Banner from '../components/Banner';
import images from '../data/Gallery';
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
    const options = {
        settings: {
            overlayColor: '#030304eb',
            disablePanzoom: true
        },
        caption: {
            captionTextTransform: 'capitalize',

        },
        buttons: {
            showThumbnailsButton: false,
            backgroundColor: 'transparent'
        },
        thumbnails: {
            thumbnailsSize: ['10%', '6vw']
        }	
    }

    return (
        <main id="gallery-page">
            <Banner text={'Gallery'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'}/>
            <section className="inner intro">
                <p>Modern Open Floor Plan, Granite Countertops, Garage Included, Full Size Washer and Dryer Included!</p>
            </section>
            <section className="gallery">
                <SRLWrapper options={options}>
                    {images.map(( image ) => {
                        return (
                            <a key={image.id} href={image.url}>
                                <img src={image.url} alt={image.description} />
                            </a>
                        )}
                    )}
                </SRLWrapper>
            </section>
        </main>
    )
}

export default Gallery
