import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderMobile from './HeaderMobile';
import { useSpring, animated } from 'react-spring';

const Header = () => {
    const [props, set] = useSpring(() => ({marginTop: 0})); 
    
// console.log(props);
useEffect(() => {

    window.addEventListener('keydown ', set({marginTop: -50}));
    console.log('down');
    return () => window.removeEventListener('keydown');
}, []);


    return (
        <animated.header style={props}>
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
        </animated.header>
    )
}

export default Header
