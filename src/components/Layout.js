import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <header id="navbar">
      <nav className="navbar-container container">
      <Link to="/" className="navabr-link">
      FRESH START
      </Link>
   
        <div id="navbar-menu">

      
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navabr-link">Home</Link>
          </li>
          <li>
            <Link to="/login" className="navabar-link">Login</Link>
          </li>
          <li>
            <Link to="/Signup" className="navabar-link">SignUp</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
      </header>
      <br></br>
   
      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;
