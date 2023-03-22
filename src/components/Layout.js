import { Outlet } from "react-router-dom";
import Footer from './Footer'
import '../components/css/Layout.css'

const Layout = () => {
  return (
    <>
  
  <nav id="navbar" className="navbar">
  <div className="nav-wrapper">
   
    <div className="logo">
   
      <a href="#home"><i className="fa fa-angellist"></i>FRESH<span>START</span></a>
    </div>

   
    <ul id="menu" className="menu">
      <li><a href="#home">Home</a></li>
   <li><a href="#services">Services</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#contact">Contact</a></li>
    
    </ul>


  </div>
</nav>



<div className="menuIcon">
  <span className="icon icon-bars"></span>
  <span className="icon icon-bars overlay"></span>
</div>


<div className="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
   
      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;

