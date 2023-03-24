import aboutus from '../images/aboutus.png'
import heroimg from '../images/heroimg.png'
import companies from '../images/jobspartners.png'
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


</div>

    </div>
  );
};

export default Home;