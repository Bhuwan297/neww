import React from 'react';

import './css/footer.css';
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="padding_4x">
      <div className="flex">
        <section className="flex-content padding_1x">
          <h3>FRESH START</h3>
          <p>
           This is some placeholder text that needs to be review before the iste is publish
            
          </p>
          
        </section>
        <section className="flex-content padding_1x">
          <h3>Quick Links</h3>
          <a href="#">Jobs</a>
          <a href="#">Brand Assets</a>
          <a href="#">Investor Relations</a>
          <a href="#">Terms of Service</a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Features</h3>
          <a href="#">Jobs</a>
          <a href="#">Placeholder</a>
          <a href="#">Placeholder</a>
          <a href="#">Placeholder</a>
        </section>
        <section className="flex-content padding_1x">
          <h3>Resources</h3>
          <a href="#">Guides</a>
          <a href="#">Research</a>
          <a href="#">Experts</a>
          <a href="#">Agencies</a>
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
