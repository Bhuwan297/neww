import aboutus from '../images/aboutus.png'

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

    </div>
  );
};

export default Home;