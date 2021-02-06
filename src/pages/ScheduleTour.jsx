import React, { useState } from 'react';
import sendEmail from '../emailjs';

const ScheduleTour = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.target;
        event.preventDefault();
        setLoading(true);
        try {
            sendEmail(event);
            form.reset();
        } catch(err) {
            console.log(err.message);
        }
        setLoading(false);
    }


    return (
        <div id='schedule-tour'>
            <h1>Send us a request for scheduling a tour.</h1>
            <section id="tour-form" className="inner">
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name' className='required'>Name:</label>
                    <input type='text' id='name' name='name' required/>
                    <label htmlFor='email' className='required'>Email Address:</label>
                    <input type='email' id='email' name='email' required/>
                    <label htmlFor='home_phone' className='required'>Home Phone:</label>
                    <input type='text' id='home_phone' name='home_phone' required/>
                    <label htmlFor='work_phone'>Work Phone:</label>
                    <input type='text' id='work_phone' name='work_phone'/>
                    <label htmlFor='source'>How did you learn about our site:</label>
                    <input type='text' id='source' name='source'/>
                    <label htmlFor='comments' className='required'>Questions/Comments:</label>
                    <textarea id='comments' name='comments' rows="4" required/>
                    
                    <div className="survey">
                        <h2>To better serve you, please take a moment to fill out our <u>optional survey.</u></h2>
                                   
                        <fieldset className="two-columns">                             
                            <legend>I am interested in the following features:</legend>
                            <div>
                                <input type='checkbox' id='bed_2' name='bed_2' value='2 Bedrooms'/>
                                <label htmlFor='bed_2'>2 Bedrooms</label>
                            </div>
                            <div>
                                <input type='checkbox' id='bath_1' name='bath_1' value='1 Bath'/>
                                <label htmlFor='bath_1'>1 Bath</label>
                            </div>
                            <div>
                                <input type='checkbox' id='bath_2' name='bath_2' value='2 Baths'/>   
                                <label htmlFor='bath_2'>2 Baths</label>
                            </div>
                            <div>
                                <input type='checkbox' id='lease_1_6' name='lease_1_6_months' value='Lease Period: 1-6 Months'/>   
                                <label htmlFor='lease_1_6'>Lease Period: 1-6 Months</label>
                            </div>
                            <div>
                                <input type='checkbox' id='lease_6_12' name='lease_6_12_months' value='Lease Period: 6-12 Months'/>   
                                <label htmlFor='lease_6_12'>Lease Period: 6-12 Months</label>
                            </div>                           
                            <div>
                                <input type='checkbox' id='lease_year' name='lease_year_or_more' value='Lease Period: 1 Year +'/>   
                                <label htmlFor='lease_year'>Lease Period: 1 Year +</label> 
                            </div>
                        </fieldset> 

                        <fieldset className="one_column">
                            <legend>I am relocating into the area: </legend>
                            <div>
                                <input type='radio' id='relocating_yes' name='relocating' value="yes"/>
                                <label htmlFor='relocating_yes'>
                                    <span className="hide">Relocation into the area </span>Yes
                                </label>
                            </div>
                            <div>
                                <input type='radio' id='relocating_no' name='relocating' value='no'/>
                                <label htmlFor='relocating_no'>
                                    <span className="hide">Relocation into the area </span>No
                                </label>
                            </div>
                        </fieldset>  

                        <fieldset className="one_column">
                            <legend>I have a dog:</legend>
                            <div>
                                <input type='radio' id='dog_yes' name='dog' value='yes' />
                                <label htmlFor='dog_yes'><span className="hide">Dog </span>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='dog_no' name='dog' value='no' />
                                <label htmlFor='dog_no'><span className="hide">Dog </span>No</label>
                            </div>
                        </fieldset>
                        <fieldset className="one_column">
                            <legend>I have a cat:</legend>
                            <div>
                                <input type='radio' id='cat_yes' name='cat' value='yes' />
                                <label htmlFor='cat_yes'><span className="hide">Cat </span>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='cat_no' name='cat' value='no' />
                                <label htmlFor='cat_no'><span className="hide">Cat </span>No</label>
                            </div>
                        </fieldset>
                        <fieldset className="two-columns">
                            <legend>I am interested in moving:</legend>
                            <div>    
                                <input type='radio' id='immediately' name='time_moving' value='immediately'/>
                                <label htmlFor='immediately'>
                                    <span className="hide">Moving </span>Immediately
                                </label>
                            </div>
                            <div>
                                <input type='radio' id='month_1' name='time_moving' value='in 1 Month'/>
                                <label htmlFor='month_1'>
                                    <span className="hide">Moving </span>in 1 Month
                                </label>
                            </div>
                            <div>
                                <input type='radio' id='months_2_3' name='time_moving' value='in 2-3 Months'/>
                                <label htmlFor='months_2_3'>
                                    <span className="hide">Moving </span>in 2-3 Months
                                </label>
                            </div>
                            <div>
                                <input type='radio' id='months_2_3' name='time_moving' value='in 4-6 Months' />
                                <label htmlFor='months_4_6'>
                                    <span className="hide">Moving </span>in 4-6 Months
                                </label>
                            </div>
                            <div>
                                <input type='radio' id='months_2_3' name='time_moving' value='in 7-9 Months' />
                                <label htmlFor='months_7_9'>
                                    <span className="hide">Moving </span>in 7-9 Months
                                </label>
                            </div>    
                            <div>
                                <input type='radio' id='months_10' name='time_moving' value='in 10 Months or More' />
                                <label htmlFor='months_10'>
                                    <span className="hide">Moving </span>in 10 Months or More
                                </label>
                            </div>
                        </fieldset>
                        <fieldset className="one-column">
                            <legend>Present residence:</legend>
                            <div>
                                <input type='radio' id='rent' name='present_residence' value='rent'/>
                                <label htmlFor='rent'>Rent</label>
                            </div>
                            <div>
                                <input type='radio' id='own' name='present_residence' value='own' />
                                <label htmlFor='own'>Own</label>
                            </div>
                        </fieldset>         
                    </div>                                                  
                    <button className="button" disabled={loading}>Schedule a Tour</button>
                </form>
            </section>
        </div>
    )
}

export default ScheduleTour;
