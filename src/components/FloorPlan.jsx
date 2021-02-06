import React from 'react';
import { useLightbox } from 'simple-react-lightbox'

const FloorPlan = ({ images }) => {
    const { openLightbox } = useLightbox();

    return (
        <>
            <div>
                {images.map((item) => (
                    <div key={item.id}>
                        <img src={item.url} alt={item.alt} onClick={() => openLightbox(item.id)} srl_elementid={item.id}/>
                    </div>
                ))}
            </div>
            <p className='details'>
                <span>3 BED</span><span>2.5 BATH</span><span>700 SF</span>
            </p>
            <a className='button' href='#' target='_blank' rel='noreferrer'>
                DOWNLOAD
            </a>
        </>
    )
}

export default FloorPlan;
