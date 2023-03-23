import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'
import '../components/css/Layout.css'


const Layout = () => {
  return (
    <>
    <nav id="navbar">
   

      
        <ul className="navbar-links">
   
            <Link to="/" className="navabr-link">Home</Link>
        
       
            <Link to="/login" className="navabar-link"> Login</Link>

     
            <Link to="/fresher" className="navabar-link"> FresherGuide</Link>
       
    
            <Link to="/contact" className="navbar-link"> Contact</Link>
         
        </ul>
   
      </nav>
      <br></br>
   
      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;
