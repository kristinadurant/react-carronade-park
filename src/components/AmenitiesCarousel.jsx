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
            image: 'http://www.perrysburgtownhomes.com/images/perrysburg_for_rent.jpg'
        },
        {
            descripiton: 'amenity',
            image: 'http://www.perrysburgtownhomes.com/images/perrysburg_for_rent.jpg'
        },
        {
            descripiton: 'amenity',
            image: 'http://www.perrysburgtownhomes.com/images/perrysburg_for_rent.jpg'
        },
        {
            descripiton: 'amenity',
            image: 'http://www.perrysburgtownhomes.com/images/perrysburg_for_rent.jpg'
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
