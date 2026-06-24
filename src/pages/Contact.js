import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="page">
      <div className="page-header contact-header">
        <h1>تواصل معنا</h1>
        <p>نحن هنا لخدمتك على مدار الساعة</p>
      </div>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <i className="ti ti-phone"></i>
              <div>
                <h3>اتصل بنا</h3>
                <p>01000000000</p>
              </div>
            </div>
            <div className="contact-card">
              <i className="ti ti-brand-whatsapp"></i>
              <div>
                <h3>واتساب</h3>
                {/* تم تصليح إضافة <a هنا */}
                <a 
                  href="https://wa.me/201000000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="wa-link"
                >
                  <span>ابدأ محادثة</span>
                </a>
              </div>
            </div>
            <div className="contact-card">
              <i className="ti ti-map-pin"></i>
              <div>
                <h3>العنوان</h3>
                <p>بنها، القليوبية</p>
              </div>
            </div>
            <div className="contact-card">
              <i className="ti ti-clock"></i>
              <div>
                <h3>ساعات العمل</h3>
                <p>السبت - الخميس: 9 ص - 9 م</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="موقعنا على الخريطة"
              src="https://maps.google.com/maps?q=Banha&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{border: 0, borderRadius: '16px'}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;