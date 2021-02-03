import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { SRLWrapper } from "simple-react-lightbox";

const FloorPlan = ({ images }) => {
    const { setModal} = useContext(ModalContext);

    return (
        <>
        <SRLWrapper>
            {images.map((item, index) => (
                <a href={item} key={index}>
                    <img src={item} alt="text" />
                </a>
            ))}
        </SRLWrapper>
        {/* <div className="img-wrapper">
            {images.map((item, index) => (
                <img 
                    key={index}
                    src={item}
                    alt='floor plan'
                    onClick={() => setModal([item, 'floor plan'])}
                />
            ))}
        </div>
        <p className='details'>
            <span>3 BED</span>
            <span>2.5 BATH</span>
            <span>700 SF</span>
        </p>
        <a className='button' href='#' target='_blank' rel='noreferrer'>
                DOWNLOAD
        </a> */}
        </>
    )
}

export default FloorPlan;
