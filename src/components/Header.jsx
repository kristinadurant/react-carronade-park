import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/carronade_park_logo2.png';

const Header = () => {
    return (
        <header>
            <div className="inner">
                <Link to='/' className="logo">
                    <img src={logo} alt="Carronade Park Logo"/>
                    <p>
                        <span>Carronade</span> 
                        <span>Park</span>
                    </p>
                </Link>
            <nav>
                    <ul>
                        <li><Link to='/floor-plans'>FLOOR PLANS</Link></li>
                        <li><Link to='/amenities'>AMENITIES</Link></li>
                        <li><Link to='/neighborhood'>NEIGHBORHOOD</Link></li>
                        <li><Link to='/gallery'>GALLERY</Link></li>
                        <li><Link to='/schedule-tour'>SCHEDULE A TOUR</Link></li>             
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
    )
}

export default Header
