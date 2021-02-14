import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from '../data/Gallery';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BannerCarousel = () => {

    return (
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={3000}
          customTransition="transform 700ms ease-out"
          responsive={responsive}
          arrows={false}
          keyBoardControl={false}
        >
          {images.map((item, index) => {
            return (
                <div key={index}>
                    <img src={require(`../assets/images/amenities/${item.src}`).default} alt={item.description} width="1620px" height="1080px"/>
                </div>
            );
          })}
        </Carousel>
    )
}

export default BannerCarousel;