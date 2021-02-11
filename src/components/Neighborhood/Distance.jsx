import React from 'react';

const Distance = ({ distance, bike, car}) => {
    return (
        <p className="distance">

            <span>{distance}</span>

            {bike && 
            <>
                <span><i className="fas fa-biking"></i>{bike}</span>
                <span className="hide">bike distance</span> 
            </>
            }
            {car && 
            <>
                <span><i className="fas fa-car-side"></i>{car}</span>
                <span className="hide">car distance</span> 
            </>
            }
      </p>
    )
}

export default Distance;
