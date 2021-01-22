import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const AmenitiesCarousel = () => {

    const amenities = [
        {
            descripiton: 'amenity',
            image: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1715_Large_otojvp.jpg'
        },
        {
            descripiton: 'amenity',
            image: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg'
        },
        {
            descripiton: 'amenity',
            image: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1653_Large_psjvht.jpg'
        },
        {
            descripiton: 'amenity',
            image: 'https://res.cloudinary.com/carronadepark/image/upload/v1611285586/Gallery/IMG_1654_Large_wey2ri.jpg'
        }
    ]
    return (
        <Carousel
        showDots
        responsive={responsive}
      >
        {amenities.map((item, index) => {
          return (
              <div key={index}>
                  <img src={item.image}/>
              </div>
          );
        })}
      </Carousel>
    )
}

export default AmenitiesCarousel;
