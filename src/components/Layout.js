import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';
import '../components/css/Layout.css';
import { useState } from 'react';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav-main">
          <div className="logo"> <Link to="/">FRESH <span className="startcolor">START</span></Link></div>
          <ul className="nav-links">
            <li className="nav-link"><Link to="/">Home</Link></li>
            <li className="nav-link"><Link to="about">About</Link></li>
            <li className="nav-link dropdown">
            <Link to="#" className="dropdown">Services <i className="bi bi-chevron-compact-down"></i></Link>
              <ul className="dropdown-list">
              <li className="nav-link"><Link to="/blog">Community</Link></li>
                <li className="nav-link"><Link to="fresher">Fresher Guide</Link></li>
              </ul>
            </li>
            <li className="nav-link"><Link to="contact">Contact</Link></li>
          </ul>
        </div>
        <div className="cta">
          <button className="btn btn-secondary">SignUp</button>
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="menu">
          <button className="btn btn-primary menu" onClick={handleMenuClick}><i className="bi-list"></i></button>
          {menuOpen && (
            <ul className="nav-mobile">
              <li className="nav-link" onClick={handleMenuItemClick}><Link to="/">Home</Link></li>
              <li className="nav-link" onClick={handleMenuItemClick}><Link to="about">About</Link></li>
              <li className="nav-link dropdown" onClick={handleMenuItemClick}>
                <Link to="#" className="dropdown">Services <i className="bi bi-chevron-compact-down"></i></Link>
                <ul className="dropdown-list">
                  <li className="nav-link" onClick={handleMenuItemClick}><Link to="fresher">Fresher Guide</Link></li>
                  <li className="nav-link" onClick={handleMenuItemClick}><Link to="fresher">Fresher Guide</Link></li>
                </ul>
              </li>
              <li className="nav-link" onClick={handleMenuItemClick}><Link to="/blog">Contact</Link></li>
              <li className="nav-link" onClick={handleMenuItemClick}><Link to="/blog">SignUp</Link></li>
              <li className="nav-link" onClick={handleMenuItemClick}><Link to="/blog">Login</Link></li>
            </ul>
            
          )}
        </div>
      </nav>
      <Outlet />
      <Footer />
    </header>
  );
};




export default Layout;


