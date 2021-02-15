import React, { useState } from 'react';
import sendEmail from '../emailjs';
import { InputRadio, InputCheckbox, Success } from '../components/ScheduleTour';
import { Spring, config } from 'react-spring/renderprops';

const ScheduleTour = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.target;
        event.preventDefault();
        setLoading(true);
        try {
            // sendEmail(event);
            form.reset();
            setSuccess(true);
        } catch(err) {
            return err.message;
        }
        setLoading(false);
    }

    return (    
        <main id='schedule-tour'>
            {!success?
                <section id="tour-form" className="inner"> 
                    <h1>Send us a request for scheduling a tour.</h1>
                    <Spring from={{ opacity: 0}} to={{opacity: 1}} config={config.slow}>
                        {props => 
                            <form onSubmit={handleSubmit} style={props}>
                                <div>
                                    <label htmlFor='name' className='required' >Name:</label>
                                    <input type='text' id='name' name='name' required autoFocus/>
                                </div>
                                <div>
                                    <label htmlFor='email' className='required'>Email Address:</label>
                                    <input type='email' id='email' name='email' required/>
                                </div>
                                <fieldset className='two-columns'>
                                    <div>
                                        <label htmlFor='home_phone' className='required'>Home Phone:</label>
                                        <input 
                                            type='tel' id='home_phone' name='home_phone' 
                                            pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='work_phone'>Work Phone:</label>
                                        <input 
                                            type='tel' id='work_phone' name='work_phone'
                                            pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                                        />
                                    </div>
                                </fieldset>
                                <div>
                                    <label htmlFor='source'>How did you learn about our site:</label>
                                    <input type='text' id='source' name='source'/>
                                </div>
                                <div>
                                    <label htmlFor='comments' className='required'>Questions/Comments:</label>
                                    <textarea id='comments' name='comments' rows="4" required/>
                                </div>
                                
                                <div className="survey">
                                    <h2>To better serve you, please take a moment to fill out our <u>optional survey.</u></h2>
                                    
                                    <InputCheckbox 
                                        customClass='two-columns'
                                        legend='I am interested in the following features'
                                        values={[
                                            { value: '2 Bedrooms', name: 'bed_2'},
                                            { value: '1 Bath', name: 'bath_1'},
                                            { value: '2 Baths', name: 'bath_2'},
                                            { value: 'Lease Period: 1-6 Months', name: 'lease_1_6_months'},
                                            { value: 'Lease Period: 6-12 Months', name: 'lease_6_12_months'},
                                            { value: 'Lease Period: 1 Year +', name: 'lease_year_or_more'},
                                        ]}
                                    />
                                    <InputRadio legend='I am relocating into the area' name='relocating' values={['Yes', 'No']} />
                                    <InputRadio legend='I have a dog' name='dog' values={['Yes', 'No']} />
                                    <InputRadio legend='I have a cat' name='cat' values={['Yes', 'No']} />
                                    <InputRadio 
                                        customClass='two-columns'
                                        legend='I am interested in moving' name='time_moving' 
                                        values={['Immediately', 'In 1 Month', 'In 2-3 Months', 'In 4-6 Months', 'In 7-9 Months', 'In 10 Months or More']} 
                                    />
                                    <InputRadio legend='Present residence' name='present_residence' values={['Rent', 'Own']} />        
                                </div>                                                  
                                <button className="button" disabled={loading}>Schedule a Tour</button>                
                            </form>
                        }
                    </Spring>
                </section>
            : <Success />
            }                     
        </main>
    )
}

export default ScheduleTour;
