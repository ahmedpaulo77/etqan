import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-main">ضمان</span>
          <span className="logo-sub">للصيانة والتشطيبات</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'}></i>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link></li>
          <li
            className="dropdown-parent"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">
              خدماتنا <i className="ti ti-chevron-down"></i>
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/maintenance" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>صيانة أجهزة</Link></li>
                <li><Link to="/finishing" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>تشطيبات</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>أعمالنا</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>تواصل معنا</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;