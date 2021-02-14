import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

const Header = () => {
    const [reverse, setReverse] = useState(false);
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          //scroll up
        setReverse(false);
      } else {
          //scroll down
        setReverse(true);
      }
      prevScrollpos = currentScrollPos;
    }

    return (
        <Spring from={{marginTop: -50}} to={{marginTop: 0}} reset={true} reverse={reverse}>
            {props =>
        <header style={props} className='mobile-hide'>
            <div className="inner-wide">
                <Link to='/' className="logo">
                    <span>Carronade Park</span>
                </Link>
            <nav className="desktop-menu">
                    <ul>
                        <li><Link to='/carronade-park-floor-plans'>FLOOR PLANS</Link></li>
                        <li><Link to='/carronade-park-amenities'>AMENITIES</Link></li>
                        <li><Link to='/carronade-park-gallery'>GALLERY</Link></li>
                        <li><Link to='/carronade-park-neighborhood'>NEIGHBORHOOD</Link></li>                       
                        <li><Link to='/carronade-park-schedule-tour'>SCHEDULE A TOUR</Link></li>             
                        <li>
                            <a 
                                href='https://app.propertyware.com/pw/portals/fortmeigsaptsllc/tenant.action' 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                RESIDENT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        }
        </Spring>
    )
}

export default Header
