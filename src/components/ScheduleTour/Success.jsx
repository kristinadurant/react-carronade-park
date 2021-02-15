import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Success = () => {

    return (
    <div className='success-form' style={{paddingTop: '10%'}}>
        <Spring from={{marginTop: 0}} to={{marginTop: 100}}>
            {props =>
                <div  style={props}>
                    <h1>Thank you for your interest</h1>
                    <p style={{fontSize: '1.1rem'}}>An agent will be in touch with you shortly with more information.</p>
                </div>
            }
        </Spring>
    </div>
    )
}

export default Success;