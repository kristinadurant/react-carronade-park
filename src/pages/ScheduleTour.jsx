import React from 'react';

const ScheduleTour = () => {
    return (
        <div id='schedule-tour'>
            <h1>Send us a request for scheduling a tour.</h1>
            <section id="tour-form" className="inner">
                <form>
                    <label for='st-name' className='required'>Name:</label>
                    <input type='text' id='st-name' name='name' required/>
                    <label for='st-email' className='required'>Email Address:</label>
                    <input type='text' id='st-email' name='email' required/>
                    <label for='st-home-phone' className='required'>Home Phone:</label>
                    <input type='text' id='st-home-phone' name='home phone' required/>
                    <label for='st-work-phone'>Work Phone:</label>
                    <input type='text' id='st-work-phone' name=''/>
                    <label for='st-source'>How did you learn about our site:</label>
                    <input type='text' id='st-source' name=''/>
                    <label for='st-work-phone' className='required'>Questions/Comments:</label>
                    <input type='textarea' id='' name='' rows="10" required/>
                    <div className="survey">
                        <p>To better serve you, please take a moment to fill out our <span>optional survey.</span></p>
                        <fieldset className="two-columns">
                            <p>                               
                                I am interested in the following features:
                            </p>
                            <div>
                                <input type='checkbox' id='bed-2' name='bed-2'/>
                                <label for='bed-2'>2 Bedrooms</label>
                            </div>
                            <div>
                                <input type='checkbox' id='bath-1' name='bath-1'/>
                                <label for='bath-1'>1 Bath</label>
                            </div>
                            <div>
                                <input type='checkbox' id='bath-2' name='bath-2'/>   
                                <label for='bath-2'>2 Baths</label>
                            </div>
                            <div>
                                <input type='checkbox' id='lease-1-6' name='lease-1-6'/>   
                                <label for='lease-1-6'>Lease Period: 1-6 Months</label>
                            </div>
                            <div>
                                <input type='checkbox' id='lease-6-12' name='lease-6-12'/>   
                                <label for='lease-6-12'>Lease Period: 6-12 Months</label>
                            </div>                           
                            <div>
                                <input type='checkbox' id='lease-year' name='lease-year'/>   
                                <label for='lease-year'>Lease Period: 1 Year +</label> 
                            </div>
                        </fieldset> 
                        <fieldset className="one-column">
                            <p>I am relocating into the area: </p>
                            <div>
                                <input type='radio' id='relocating-yes' name='relocating'/>
                                <label for='relocating-yes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='relocating-no' name='relocating'/>
                                <label for='relocating-no'>No</label>
                            </div>
                        </fieldset>                
                        <fieldset className="one-column">
                            <p>I have a dog:</p>
                            <div>
                                <input type='radio' id='dog-yes' name='dog'/>
                                <label for='dog-yes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='dog-no' name='dog'/>
                                <label for='dog-no'>No</label>
                            </div>
                        </fieldset>
                        <fieldset className="one-column">
                            <p>I have a cat:</p>
                            <div>
                                <input type='radio' id='cat-yes' name='cat'/>
                                <label for='cat-yes'>Yes</label>
                            </div>
                            <div>
                                <input type='radio' id='cat-no' name='cat'/>
                                <label for='cat-no'>No</label>
                            </div>
                        </fieldset>
                        <fieldset className="two-columns">
                            <p>I am interested in moving:</p>
                            <div>    
                                <input type='radio' id='immediately' name='time-moving'/>
                                <label for='immediately'>Immediately</label>
                            </div>
                            <div>
                                <input type='radio' id='month-1' name='time-moving'/>
                                <label for='month-1'>in 1 Month</label>
                            </div>
                            <div>
                                <input type='radio' id='months-2-3' name='time-moving'/>
                                <label for='months-2-3'>in 2-3 Months</label>
                            </div>
                            <div>
                                <input type='radio' id='months-2-3' name='time-moving'/>
                                <label for='months-4-6'>in 4-6 Months</label>
                            </div>
                            <div>
                                <input type='radio' id='months-2-3' name='time-moving'/>
                                <label for='months-7-9'>in 7-9 Months</label>
                            </div>    
                            <div>
                                <input type='radio' id='months-10' name='time-moving'/>
                                <label for='months-10'>in 10 Months or More</label>
                            </div>
                        </fieldset>
                        <fieldset className="one-column">
                            <p>Present residence:</p>
                            <div>
                                <input type='radio' id='rent' name='residence'/>
                                <label for='rent'>Rent</label>
                            </div>
                            <div>
                                <input type='radio' id='own' name='residence'/>
                                <label for='own'>Own</label>
                            </div>
                        </fieldset>         
                    </div>                                                  
                    <input className="button" type="submit" name="action" value="Schedule a Tour"></input>
                </form>
            </section>
        </div>
    )
}

export default ScheduleTour;
