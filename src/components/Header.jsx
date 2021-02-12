import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMobile from './HeaderMobile';

const Header = () => {
    
    return (
        <header>
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
                <HeaderMobile />
            </div>
        </header>
    )
}

export default Header
