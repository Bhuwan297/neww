import aboutus from '../images/aboutus.png'
import heroimg from '../images/heroimg.png'
import companies from '../images/jobspartners.png'

import com1 from '../images/comm.png';

import com2 from '../images/comm2.png';

import com3 from '../images/comm3.png';


import com4 from '../images/commm5.png';


import './css/home.css'


const Home = () => {
  return (
    <div className="community">
      <br></br>
   
   <div className='hero'>
<h3>A Digital Platform that helps freshers find their way around</h3>

<p>
Relocating to the UK is a daunting process for international students.
 Are you feeling lost,confused and overwhelmed 
 about the next step to take on arrival on campus? 
 We have a guide to make your stay with us more convenient 
 and exciting.
 Click on the button below to get started
</p>

<img src={heroimg} className='heroimg' />


   </div>
<br></br>
   <div className='buttonhero'>
    <a href='#' className='getStarted'>
      GET STARTED

    </a>
    <a href='#' className='signup'>
       SIGNUP

</a>
   </div>

   <div className='aboutus'>

    <h4>ABOUT US</h4>
<p>
What can Freshstart do for you?
At Freshstart, our goal is to help international
 students get settled into college life as quickly
  and easily as possible. We understand how daunting
  the prospect of attending a university can be, especially
 in a new country with a new culture and language. Read more....
</p>
<img src={aboutus} className='aboutus' />
   </div>



   <div className='FresherGuide'>

    <h3>FRESHER GUIDE</h3>
    <p>
    Nisi fermentum elementum quam volutpat neque lectus est. 
    In vel lacus tempor pretium. Quis id et interdum id volutpat
     amet eget quis integer. Ut morbi non.

    </p>
   </div>

<div className='ourservices'>
  <h3>OUR SERVICES</h3>
 
  <p>
    
  Here at the university of Wolverhampton we aim to give you 
  the best experience of the city of Wolverhampton. Read more..
  </p>

<div className='services' id="blueback">
  <h3>DISCOUNT GAME TICKETS</h3>
  <p>Enjoy Live Matches in the Molienux Stadium with Discount Prizes</p>
</div>
<div className='services' id="yellowback">
  <h3>UPCOMING EVNTS</h3>
  <p>
    Subscribe to our Newsletter for exciting UPCOMING evnts
  </p>
</div>

<div className='services' id="blueback">
  <h3>WEEKEND TOURS</h3>
  <br></br>
  <p>
    Enjoy Tours Around The West Midlands
  </p>
</div>

<div className='services' id="yellowback">
  <h3>PART TIME JOBS</h3>
  <p>
    Make Money while you study.
  </p>
</div>
<br></br>

<a href='#' className='viewmore'> VIEW MORE SERVICES</a>
<img src={companies} className='jobsimg' />

</div>
<h3>Our Community</h3>
    <p>
    Our mission is to provide an online 
    platform dedicated to helping our 
    students connect with the right people and places.   
           Read more....

    </p>
    <br></br>


<div className='ourcommunity'>




<div className='comimg'>
<img src={com1} className='commsimgaes' />

</div>

<div className='comimg'>
<img src={com2} className='commsimgaes' />

</div>


<div className='comimg'>
<img src={com3} className='commsimgaes' />

</div>


<div className='comimg'>
<img src={com4} className='commsimgaes' />

</div>




</div>

<div className='blog'>
  <h3>BLOG</h3>
  <p>PLEASE CHECK OUT OUR BLOG FOR THE LATEST INFORMATION ON THINGS COMING UP</p>



</div>


    </div>
  );
};

export default Home;