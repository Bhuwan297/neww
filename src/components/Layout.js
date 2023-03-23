import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'
import '../components/css/Layout.css'

const Layout = () => {
  return (
    <>
    <header id="navbar">
      <nav className="navbar-container">
      <Link to="/" className="navabr-link">
FRESH START
      </Link>
      <button
          type="button"
          id="navbar-toggle"
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div id="navbar-menu">

      
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navabr-link">Home</Link>
          </li>
          <li>
            <Link to="/login" className="navabar-link">Login</Link>
          </li>
          <li>
            <Link to="/fresher" className="navabar-link">Fresher Guide</Link>
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

