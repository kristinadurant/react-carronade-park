import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { useSpring, animated, config } from 'react-spring';

const Home = () => {
    const props = useSpring({config: config.slow, opacity: 1, from: {opacity: 0}})

    return (
        <main id="home-page">
            <Banner text={'Carronade Park Townhomes'} />
            <animated.section style={props} className="inner intro">
                <p>Perrysburg, Ohio is a suburb of Toledo with a population of about 20,600. 
                At the intersection of I-75 and I-475, Perrysburg is a prime location for commuting outside 
                Toledo to surrounding areas. Perrysburg continues to grow with new locations for shopping, 
                dining, and entertainment. The latest attraction, Levis Common’s outdoor shopping mall, 
                is within walking distance of Fort Meigs at Levis Apartments.</p>
                <p>Apartment seekers will be happy to learn that with four elementary schools, one junior 
                high, and one high school, Perrysburg Schools have received the state's excellence rating 
                for the 8th consecutive year. Perrysburg is also minutes away from five major colleges/universities.</p>
                <p>Perrysburg is also rich in History and Community. Fort Meigs State Memorial, 
                where the largest reconstructed wooden-walled fortification in North America can be found. 
                This area was once a battlefield in the War of 1812 and has a museum that commemorates 
                the historical event. Perrysburg’s Historical District preserves the original architecture 
                of Perrysburg, while downtown comes to life during the summer months with parades and farmers markets.</p>
                <Link className="button" to='/carronade-park-schedule-tour'>Schedule a tour</Link>
            </animated.section>

            <section id="home-page-blocks" className="inner-wide">
                <div 
                    style={{backgroundImage: 'url(https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg)'}}
                        className='background-image'
                >                    
                    <Link className="title" to='/carronade-park-floor-plans'>
                        Floor Plans
                    </Link>
                </div>
                <div 
                    style={{backgroundImage: 'url(https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1653_Large_psjvht.jpg)'}}
                    className='background-image'
                >
                    <Link className="title" to='/carronade-park-amenities'>
                        Amenities
                    </Link>
                </div>
                <div 
                    style={{backgroundImage: 'url(https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg)'}}
                    className='background-image'
                >
                    <Link className="title" to='/carronade-park-neighborhood'>
                        Neighborhood
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home;
