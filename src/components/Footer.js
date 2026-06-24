import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">إتقان</span>
          <p>للصيانة والتشطيبات</p>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link facebook">
            <i className="ti ti-brand-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link instagram">
            <i className="ti ti-brand-instagram"></i>
          </a>
          <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer" className="social-link whatsapp">
            <i className="ti ti-brand-whatsapp"></i>
          </a>
        </div>

        <p className="footer-copy">© 2025 إتقان للصيانة والتشطيبات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

export default Footer;