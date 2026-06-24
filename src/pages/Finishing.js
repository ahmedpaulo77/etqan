import React from 'react';
import { finishingServices } from '../data/services';
import './Finishing.css';

function Finishing() {
  return (
    <main className="page">
      <div className="page-header finishing-header">
        <h1>خدمات التشطيبات</h1>
        <p>نشطب شقتك بأعلى جودة وأحدث الأساليب</p>
      </div>
      <div className="container">
        <div className="services-grid">
          {finishingServices.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon finishing-icon">
                <i className={`ti ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              {/* تم تصليح فتحة التاج هنا <a */}
              <a 
                href={`https://wa.me/201000000000?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noreferrer"
                className="wa-btn"
              >
                <i className="ti ti-brand-whatsapp"></i>
                <span>اطلب الخدمة</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Finishing;