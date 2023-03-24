import React from 'react';
import { Link } from "react-router-dom";
import './css/footer.css';
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="padding_4x">
      <div className="flex">
        <section className="flex-content padding_1x">
          <h3>FRESH START</h3>
          <p>
           This is some placeholder text that needs to be review before the iste is publishgit
            
          </p>
          
        </section>
        <section className="flex-content padding_1x">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="fresher">FresherGuide</Link>
          <Link to="/">Community</Link>
          <Link to="contact">Contact</Link>
          <Link to="login">Login</Link>
          <Link to="contact">SignUp</Link>
        </section>
    
        <section className="flex-content padding_1x">
          <h3>Newsletter</h3>
          <p>You can trust us. we only send promo offers,</p>
          <fieldset className="fixed_flex">
            <input type="email" name="newsletter" placeholder="Your Email Address" />
            <button className="btn btn_2">Subscribe</button>
          </fieldset>
        </section>
      </div>
      <div className="flex">
        <section className="flex-content padding_1x">
          <p>Copyright ©2023 All rights reserved || FRESH START</p>
        </section>
        <section className="flex-content padding_1x">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaDribbble /></a>
          <a href="#"><FaLinkedin /></a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
