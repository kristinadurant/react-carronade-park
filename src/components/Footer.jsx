import React from 'react'

const Footer = () => {
    return (
        <footer>
           <p>Fort Meigs at Levis Apartments / Schoen Builders</p> 
            <p>134 W South Boundary Street   •   Suite B   •   Perrysburg, Ohio 43551</p>   
            <p>Phone: 419-873-9933</p>
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

export default Footer
