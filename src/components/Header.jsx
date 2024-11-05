import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../images/logo.png';
import LogoMobile from '../images/logo_d.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={isMobile ? LogoMobile : Logo} alt="Logo" />
      </div>
      {isMobile ? (
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      ) : (
        <nav>
          <a href="#home">Home</a>
          <a href="#featured">Featured</a>
          <a href="#services">Services</a>
        </nav>
      )}
      {!isMobile && <button className="find-now-button">Find Now</button>}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#featured" onClick={toggleMenu}>Featured</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <button className="find-now-button mobile-find-now" onClick={toggleMenu}>Find Now</button>
        </div>
      )}
    </header>
  );
}

export default Header;
