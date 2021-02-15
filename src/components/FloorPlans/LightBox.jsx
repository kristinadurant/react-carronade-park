import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

const LightBox = ({ images }) => {
    const options = {
        settings: {
            disableKeyboardControls: true,
            disableWheelControls: true,
            overlayColor: '#030304fc'
        },
        thumbnails: {
            showThumbnails: false
        },
        buttons: {
            showAutoplayButton: false,
            showFullscreenButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
            backgroundColor: 'transparent'
        }
    }

    return (
        <section id="floor-plans-modal" style={{display: 'none'}}>
            <SRLWrapper options={options}>
                {images.map((item) => (
                    <a href={item.url} key={item.id}>
                        <img src={item.url} alt={item.alt} />
                    </a>
                ))}
            </SRLWrapper>
        </section>
    )
}

export default LightBox
