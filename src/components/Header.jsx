import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <div className="inner-wide">
                <Link to='/' className="logo">
                    <i className="fas fa-leaf"></i>
                    <span>Carronade Park</span>
                </Link>
            <nav>
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
                <button onClick={() => setOpen(true)} className='open-menu'>
                    <i class="fas fa-bars"></i>
                    <span className='hide'>Open menu</span>
                </button>
            </div>
        </header>
    )
}

export default Header
