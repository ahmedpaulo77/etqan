import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>مكتب <span>ضمان</span> للصيانة والتشطيبات</h1>
          <p>نقدم خدمات صيانة الأجهزة الكهربائية وتشطيب الشقق بأعلى جودة وأسعار مناسبة</p>
          
          {/* تم تصليح فتحة التاج هنا <a */}
          <a 
            href="https://wa.me/201019506066?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <i className="ti ti-brand-whatsapp"></i>
            <span>تواصل معنا</span>
          </a>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">لماذا تختار ضمان</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="ti ti-clock"></i>
              <h3>سرعة التنفيذ</h3>
              <p>نصلك في أسرع وقت ممكن</p>
            </div>
            <div className="feature-card">
              <i className="ti ti-shield-check"></i>
              <h3>ضمان الجودة</h3>
              <p>ضمان على جميع أعمالنا</p>
            </div>
            <div className="feature-card">
              <i className="ti ti-coin"></i>
              <h3>أسعار مناسبة</h3>
              <p>أسعار تناسب الجميع</p>
            </div>
            <div className="feature-card">
              <i className="ti ti-tools"></i>
              <h3>فنيون متخصصون</h3>
              <p>فريق محترف وذو خبرة</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">خدماتنا</h2>
          <div className="services-preview-grid">
            <Link to="/maintenance" className="service-preview-card">
              <i className="ti ti-tool"></i>
              <h3>صيانة الأجهزة</h3>
              <p>تكييفات، غسالات، ثلاجات، بوتاجازات وأكثر</p>
            </Link>
            <Link to="/finishing" className="service-preview-card finishing">
              <i className="ti ti-building"></i>
              <h3>تشطيبات</h3>
              <p>دهانات، سيراميك، سباكة، كهرباء وأكثر</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">آراء عملائنا</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <i className="ti ti-quote"></i>
              <p>خدمة ممتازة وسرعة في التنفيذ، أنصح الجميع بالتعامل معهم</p>
              <span>أحمد محمد</span>
            </div>
            <div className="testimonial-card">
              <i className="ti ti-quote"></i>
              <p>أسعار معقولة وجودة عالية، شكراً لفريق إتقان</p>
              <span>محمود علي</span>
            </div>
            <div className="testimonial-card">
              <i className="ti ti-quote"></i>
              <p>تشطيب شقتي طلع رائع جداً، فريق محترف ومتعاون</p>
              <span>سارة أحمد</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;