import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">ضمان</span>
          <p>للصيانة والتشطيبات</p>
        </div>

        <div className="footer-social">
          <a href="https://web.facebook.com/p/%D8%B6%D9%85%D8%A7%D9%86-Banha-61582103792911/?_rdc=1&_rdr#" target="_blank" rel="noreferrer" className="social-link facebook">
            <i className="ti ti-brand-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link instagram">
            <i className="ti ti-brand-instagram"></i>
          </a>
          <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer" className="social-link whatsapp">
            <i className="ti ti-brand-whatsapp"></i>
          </a>
        </div>

        <p className="footer-copy">© 2025 ضمان للصيانة والتشطيبات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

export default Footer;