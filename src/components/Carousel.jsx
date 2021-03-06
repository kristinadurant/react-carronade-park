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
const CustomArrows = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide }
  } = rest;
  return (
    <>
      <button className={currentSlide === 0 ? 'disable previous' : 'previous'} onClick={() => previous()}>
        <span className='hide'>Previous</span>
      </button>
      <button className='next' onClick={() => next()}>
        <span className='hide'>Next</span>
      </button>
    </>
  );
};
const AmenitiesCarousel = ({ images }) => {

    return (
      <section className="carousel bg-grey">
        <Carousel
          keyBoardControl
          swipeable={true}
          showDots
          renderDotsOutside
          infinite
          autoPlay
          autoPlaySpeed={5000}
          customTransition="all 1s"
          transitionDuration={1000}
          responsive={responsive}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomArrows />}
          arrows={false}
          className="inner"
        >
          {images.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item.image} alt={item?.descripiton} sizes='90vw'/>
                </div>
            );
          })}
        </Carousel>
      </section>
    )
}

export default AmenitiesCarousel;
