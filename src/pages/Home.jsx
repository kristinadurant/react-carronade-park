import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div id="home-page">
            <Banner text={'Carronade Park Townhomes'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            <section className="inner">
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
                <p>Apartments for rent in Perrysburg Ohio.</p>
            </section>
            <section id="home-page-blocks" className="inner-wide">
                <div style={{backgroundImage: 'url(https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1716_Large_s75upg.jpg)'}}>                
                    <div className="container">                       
                        <Link to='/carronade-park-floor-plans'>
                            <i class="fas fa-angle-double-right"></i>
                            Floor Plans
                        </Link>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(https://res.cloudinary.com/carronadepark/image/upload/v1611285585/Gallery/IMG_1653_Large_psjvht.jpg)'}}>
                    <div className="container">  
                        <Link to='/carronade-park-amenities'>
                            <i class="fas fa-angle-double-right"></i>
                            Amenities
                        </Link>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg)'}}>
                    <div className="container">  
                        <Link to='/carronade-park-neighborhood'>
                            <i class="fas fa-angle-double-right"></i>
                            Neighborhood
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
