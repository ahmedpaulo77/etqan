import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 1, category: 'finishing', title: 'تشطيب صالة', img: `${process.env.PUBLIC_URL}/images/1.jpg` },
  { id: 2, category: 'finishing', title: 'دهانات غرفة', img: `${process.env.PUBLIC_URL}/images/2.jpg` },
  { id: 3, category: 'maintenance', title: 'صيانة تكييف', img: `${process.env.PUBLIC_URL}/images/3.jpg` },
  { id: 4, category: 'finishing', title: 'تركيب سيراميك', img: `${process.env.PUBLIC_URL}/images/4.jpg` },
  { id: 5, category: 'maintenance', title: 'صيانة غسالة', img: `${process.env.PUBLIC_URL}/images/5.jpg` },
  { id: 6, category: 'finishing', title: 'تشطيب مطبخ', img: `${process.env.PUBLIC_URL}/images/6.jpg` },
];

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex + 1) % filtered.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
  };

  return (
    <main className="page">
      <div className="page-header gallery-header">
        <h1>أعمالنا</h1>
        <p>شاهد نماذج من أعمالنا المنجزة</p>
      </div>
      <div className="container">
        <div className="filter-btns">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>الكل</button>
          <button className={filter === 'finishing' ? 'active' : ''} onClick={() => setFilter('finishing')}>تشطيبات</button>
          <button className={filter === 'maintenance' ? 'active' : ''} onClick={() => setFilter('maintenance')}>صيانة</button>
        </div>
        <div className="gallery-grid">
          {filtered.map((item, index) => (
            <div className="gallery-card" key={item.id} onClick={() => openImage(index)}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeImage}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeImage}>
              <i className="ti ti-x"></i>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={goPrev}>
              <i className="ti ti-chevron-right"></i>
            </button>
            <img src={filtered[selectedIndex].img} alt={filtered[selectedIndex].title} />
            <button className="lightbox-nav lightbox-next" onClick={goNext}>
              <i className="ti ti-chevron-left"></i>
            </button>
            <p>{filtered[selectedIndex].title}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;