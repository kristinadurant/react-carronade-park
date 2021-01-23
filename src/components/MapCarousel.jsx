import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const MapCarousel = ({ markers }) => {

  return (
    <div className="inner">
      <Carousel
        showDots
        keyBoardControl
        infinite
        autoPlay
        autoPlaySpeed={3000}
        customTransition="all 1s"
        transitionDuration={1000}
        responsive={responsive}
      >
        {markers.map((marker, index) => {
          return (
              <div key={index}>
                <p>{marker.name}</p>
                <p>{marker.description}</p>
                <p>
                  <span>{marker.distance}</span>                         
                  {marker.bike && <span>{marker.bike}<i class="fas fa-biking"></i></span>}
                  {marker.car && <span>{marker.car}<i class="fas fa-car-side"></i></span>}
                </p>
              </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MapCarousel;