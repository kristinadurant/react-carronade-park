import React, { useState } from 'react';
import sendEmail from '../emailjs';
import { InputRadio, InputCheckbox, InputText, Success } from '../components/ScheduleTour';
import { Spring, config } from 'react-spring/renderprops';

const ScheduleTour = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.target;
        event.preventDefault();
        setLoading(true);
        try {
            sendEmail(event);
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
                                <InputText 
                                    type='text' name='name' label='Name'
                                    required autoFocus
                                />
                                <InputText 
                                    type='email' name='email' label='Email Address'
                                    required
                                />
                                <fieldset className='two-columns'>
                                    <InputText 
                                        type='tel' name='home_phone' label='Home Phone'
                                        required
                                        pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                                    />
                                    <InputText 
                                        type='tel' name='work' label='Work Phone'
                                        pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                                    />
                                </fieldset>
                                <InputText type='text' name='source' label='How did you learn about our site'/>
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
