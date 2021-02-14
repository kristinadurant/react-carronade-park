import React, { useContext } from 'react';
import { TabContext } from '../../context/TabContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Distance } from '../Neighborhood';
import maps from '../../data/Neighborhood';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const MapCarousel = () => {
  const { tab } = useContext(TabContext);

  return tab && (
    <section style={{maxWidth: '100%', margin: 'auto'}}>
      <Carousel
        showDots
        keyBoardControl
        infinite
        autoPlay
        autoPlaySpeed={3000}
        customTransition="all 1s"
        transitionDuration={1000}
        responsive={responsive}
        containerClass="map-carousel"
      >
        {maps[tab].markers.map((marker, index) => {
          return (
              <div key={index}>
                <p className="title">
                  <a href={marker.google_url} rel='noreferrer' target='_blank'>
                    {marker.name}
                  </a>
                </p>
                <p>{marker.description}</p>
                <Distance distance={marker.distance} walk={marker.walk} bike={marker.bike} car={marker.car} />
              </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default MapCarousel;