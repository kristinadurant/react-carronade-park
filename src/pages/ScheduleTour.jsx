import React from 'react';
import Banner from '../components/Banner';

const ScheduleTour = () => {
    return (
        <div id='schedule-tour'>
            <Banner text={'Schedule a Tour'} image={'https://res.cloudinary.com/carronadepark/image/upload/v1611351435/Neighborhood/Poster_2_Large_1_maemqb.jpg'}/>
            <section>
                <p>Fort Meigs at Levis Apartments / Schoen Builders</p>
                <p>134 W South Boundary Street   •   Suite B   •   Perrysburg, Ohio 43551</p>
                <p>Phone: 419-873-9933</p>
            </section>
            <section id="tour-form">
                <form>
                    <label for='st-name'>Name:</label>
                    <input type='text' id='st-name' name='name' required/>
                    <label for='st-email'>Email Address:</label>
                    <input type='text' id='st-email' name='email' required/>
                    <label for='st-home-phone'>Home Phone:</label>
                    <input type='text' id='st-home-phone' name='home phone' required/>
                    <label for='st-work-phone'>Work Phone:</label>
                    <input type='text' id='st-work-phone' name=''/>
                    <label for='st-source'>How did you learn about our site:</label>
                    <input type='text' id='st-source' name=''/>
                    <label for='st-work-phone'>Questions/Comments:</label>
                    <input type='textarea' id='' name='' rows="10"/>
                    <fieldset>
                        <p>
                            To better serve you, please take a moment to fill out our optional survey.
                            I am interested in the following features:
                        </p>
                        <input type='checkbox' id='bed-2' name='bed-2'/>
                        <label for='bed-2'>2 Bedrooms</label>
                        <input type='checkbox' id='bath-1' name='bath-1'/>
                        <label for='bath-1'>1 Bath</label>
                        <input type='checkbox' id='bath-2' name='bath-2'/>   
                        <label for='bath-2'>2 Baths</label>
                        <input type='checkbox' id='lease-1-6' name='lease-1-6'/>   
                        <label for='lease-1-6'>Lease Period: 1-6 Months</label>
                        <input type='checkbox' id='lease-6-12' name='lease-6-12'/>   
                        <label for='lease-6-12'>Lease Period: 6-12 Months</label>
                        <input type='checkbox' id='lease-year' name='lease-year'/>   
                        <label for='lease-year'>Lease Period: 1 Year +</label>                       
                    </fieldset> 
                    <fieldset>
                        <p>I am relocating into the area: </p>
                        <input type='radio' id='relocating-yes' name='relocating'/>
                        <label for='relocating-yes'>Yes</label>
                        <input type='radio' id='relocating-no' name='relocating'/>
                        <label for='relocating-no'>No</label>
                    </fieldset>                
                    <fieldset>
                        <p>I have a dog:</p>
                        <input type='radio' id='dog-yes' name='dog'/>
                        <label for='dog-yes'>Yes</label>
                        <input type='radio' id='dog-no' name='dog'/>
                        <label for='dog-no'>No</label>
                    </fieldset>
                    <fieldset>
                        <p>I have a cat:</p>
                        <input type='radio' id='cat-yes' name='cat'/>
                        <label for='cat-yes'>Yes</label>
                        <input type='radio' id='cat-no' name='cat'/>
                        <label for='cat-no'>No</label>
                    </fieldset>
                    <fieldset>
                        <p>I am interested in moving:</p>
                        <input type='radio' id='immediately' name='time-moving'/>
                        <label for='immediately'>Immediately</label>
                        <input type='radio' id='month-1' name='time-moving'/>
                        <label for='month-1'>in 1 Month</label>
                        <input type='radio' id='months-2-3' name='time-moving'/>
                        <label for='months-2-3'>in 2-3 Months</label>
                        <input type='radio' id='months-2-3' name='time-moving'/>
                        <label for='months-4-6'>in 4-6 Months</label>
                        <input type='radio' id='months-2-3' name='time-moving'/>
                        <label for='months-7-9'>in 7-9 Months</label>
                        <input type='radio' id='months-10' name='time-moving'/>
                        <label for='months-10'>in 10 Months or More</label>                        
                    </fieldset>
                    <fieldset>
                        <p>Present residence:</p>
                        <input type='radio' id='rent' name='residence'/>
                        <label for='rent'>Rent</label>
                        <input type='radio' id='own' name='residence'/>
                        <label for='own'>Own</label>
                    </fieldset>                                                           
                    <input className="button" type="submit" name="action" value="Schedule a Tour"></input>
                </form>
            </section>
        </div>
    )
}

export default ScheduleTour;
