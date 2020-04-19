import React, { useState } from 'react';
import './header.css';
import logoURL from '../../assets/logo.svg';

const Header = () => {
  const [navbarDisplay, setNavBarDisplay] = useState(false);
  const toggleNavBarDisplay = (e) => {
    e.preventDefault();
    setNavBarDisplay(!navbarDisplay);
  }
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <img src={logoURL} alt="Logo" />
          </a>
          <a role="button" className={'navbar-burger burger ' + (navbarDisplay ? 'is-active' : '')} aria-label="menu" aria-expanded="false" data-target="main-navbar" onClick={toggleNavBarDisplay}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="main-navbar" className={'navbar-menu ' + (navbarDisplay ? 'is-active' : '')}>
        </div>
      </nav>
    </header>
  )
}

export default Header;