import React from 'react'

const Footer = () => {
    return (
        <footer>
           <p>Fort Meigs at Levis Apartments <span>/</span> Schoen Builders</p> 
            <a 
                style={{marginBottom: 0}}
                href="https://goo.gl/maps/8Ey31QJPYGvNKSWh7"
                target="_blank" rel="noreferrer"
            >
                134 W South Boundary Street <span>•</span> Suite B <span>•</span> Perrysburg, Ohio 43551
            </a>   
            <p>Phone: <a href='tel:419-873-9933'>419-873-9933</a></p>
            <div className="social">
            <a href="https://www.facebook.com/schoenbuilders" rel="noreferrer" target='_blank'>
                <i className="fab fa-facebook-f"></i>
                <span className="hide">Facebook</span>
            </a>
            <a href="https://www.houzz.com/professionals/general-contractors/schoen-builders-pfvwus-pf~402654639?" rel="noreferrer" target='_blank'>
                <i className="fab fa-houzz"></i>
                <span className="hide">Houzz</span>
            </a>            
            </div>
        </footer>
    )
}

export default Footer;
