import React from 'react';
import freshgude from "../images/fresherguide.png";
import '../components/css/fresh.css'
import maps from '../images/Frame 195.png'


const Freshers = () => {
  return (
    <div>

    <section className='fresherhero'>
        <h1 className='header-fresher'>Fresher's Gude</h1>

        <div className='description-header'>
          <p>   Don't Worry, there is always <span> first time</span>
          
          <span> <p>We will make it easy for you to as freshman
            it might be overwhelming at start jdodjododkd

            fjifkflfl
            
            </p></span>
          </p> 


        </div>


<img src={freshgude}  className="fresh" alt= "heroim" />




</section>
<img src={maps}  className="fresh" alt= "heroim" />

<section>




</section>


<section className='simplegudes'>
<li>Open a Bank Account</li>
<li>Collect Biometric Residence</li>
<li>Complete your right to Study</li>
<li>Complete Online Enrollment and Check your timr Table</li>
<li>Register with a Doctor</li>
<li>Learn About University Support</li>
<li>Attend Social Events and Make new Friends</li>

</section>


    </div>
  )
}

export default Freshers;