import React, { useState } from 'react';
import styles from './images.module.scss'; // Importe o módulo de estilo

import imagem1 from '../../assets/fishing-boat/capa3.JPG';
import imagem2 from '../../assets/fishing-boat/capa3.JPG';
import imagem3 from '../../assets/fishing-boat/capa2.JPG';
import imagem4 from '../../assets/fishing-boat/capa1.JPG';
import imagem5 from '../../assets/fishing-boat/capa3.JPG';

const images = [imagem1, imagem2, imagem3, imagem4, imagem5];

export function Images() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>
      <div className={styles.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
