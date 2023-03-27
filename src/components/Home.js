
import fresher from '../images/concept-of-remote-team.png'

import './css/home.css'


const Home = () => {
  return (
    <div className="community">

      <br></br>
   
   <div className='hero1'>

   <h3>
        Digital Platform that helps Freshers
        </h3>



   </div>
<br></br>
  

   <section className="hero">
        {/* Hero section content goes here */}
    
      </section>
      <div className='buttonhero'>
    <a href='#' className='getStarted'>
      GET STARTED

    </a>
    <a href='#' className='signup'>
       SIGNUP

</a>
   </div>

   
      <section className="section">
        <div className="wrapper">
          <h2 className="section__title">FEATURES</h2>
       

          <div className="box__grid">
            <article className="box">
              <a className="box__content" href="#">
          
                <h3 className="box__title">CONTACT</h3>
                <p>
                 
                 You can contact us about any thing about the platform or finding your way around the city
                 </p>
                <span className="box__more">Read more </span>
              </a>
            </article>

            <article className="box">
              <a className="box__content" href="#">
              
                <h3 className="box__title">ABOUT</h3>
                <p>Duis neque leo cursus ac libero ac imperdiet bibendum nisl mauris neque diam vulputate nem.</p>
                <span className="box__more">Read more </span>
              </a>
            </article>

            <article className="box">
              <a className="box__content" href="#">
               
                <h3 className="box__title">FRESHER GUIDE</h3>
                <p>Duis neque leo cursu ac libero ac imperdiet bibendum nisl mauris neque diam vulputate nem.</p>
                <span className="box__more">Read more </span>
              </a>
            </article>
          </div>
          <div className="box__grid">
            <article className="box">
              <a className="box__content" href="#">
          
                <h3 className="box__title">COMMUNITY</h3>
                <p>
                 The Community sections helps you connect with like minded people.
                  
                  </p>
                <span className="box__more">Read more </span>
              </a>
            </article>

            <article className="box">
              <a className="box__content" href="#">
              
                <h3 className="box__title">FIND JOBS</h3>
                <p>Duis neque leo cursus ac libero ac imperdiet bibendum nisl mauris neque diam vulputate nem.</p>
                <span className="box__more">Read more </span>
              </a>
            </article>

            <article className="box">
              <a className="box__content" href="#">
               
                <h3 className="box__title">FIND EVENTS</h3>
                <p>Duis neque leo cursus ac libero ac imperdiet bibendum nisl mauris neque diam vulputate nem.</p>
                <span className="box__more">Read more </span>
              </a>
            </article>
          </div>
        </div>
      </section>

  
      <section className='overall1'>
    <div className="title1"> Connect... </div>
    <div className="description1">
     
     Connect with students and learn and earn through our platform
     </div>
    <div className="cta1">
      <div className="start-trial1">Read More</div>
    </div>
  </section>

<br></br>
<div className='freshergude'>

  <h3>THE FRESHER GUIDE TO HELP YOU</h3>
  <hr></hr>

  <img src={fresher}  className="hello"/>



  
</div>



    </div>
  );
};

export default Home;