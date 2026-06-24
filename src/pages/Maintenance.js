import React from 'react';
import { maintenanceServices } from '../data/services';
import './Maintenance.css';

function Maintenance() {
  return (
    <main className="page">
      <div className="page-header maintenance-header">
        <h1>صيانة الأجهزة الكهربائية</h1>
        <p>نصلح جميع أنواع الأجهزة الكهربائية بسرعة وكفاءة</p>
      </div>
      <div className="container">
        <div className="services-grid">
          {maintenanceServices.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon maintenance-icon">
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

export default Maintenance;