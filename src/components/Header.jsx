import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
           <nav>
                <ul>
                    <li><Link to='/floor-plans'>FLOOR PLANS</Link></li>
                    <li><Link to='/amenities'>AMENITIES</Link></li>
                    <li><Link to='/gallery'>GALLERY</Link></li>
                    <li><Link to='/neighborhood'>NEIGHBORHOOD</Link></li>
                    <li><a href='#'>RESIDENT</a></li>
                </ul>
            </nav> 
        </header>
    )
}

export default Header
