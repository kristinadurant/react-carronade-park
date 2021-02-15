import React from 'react';
import { useLightbox } from 'simple-react-lightbox'

const FloorPlan = ({ floorPlan }) => {
    const { openLightbox } = useLightbox();

    return (
        <>
            <div>
                {floorPlan.images.map((item) => (
                    <div key={item.id}>
                        <img src={item.url} alt={item.alt} onClick={() => openLightbox(item.id)} srl_elementid={item.id}/>
                    </div>
                ))}
            </div>
            <p className='details'>
                <span>{floorPlan.bed} BED</span>
                <span>{floorPlan.bath} BATH</span>
                <span>{floorPlan.sf} SF</span>
            </p>
            <a className='button' href={floorPlan.pdf} target='_blank' rel='noreferrer'>
                DOWNLOAD
            </a>
        </>
    )
}

export default FloorPlan;
