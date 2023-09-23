import React, { useState } from 'react';
import styles from './activities.module.scss'; // Certifique-se de usar o caminho correto para o seu módulo SCSS

export function Activities() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleHover1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleHover2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleHover3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.col_third}`}>
        <div className={`hover ${styles.panel} ${isFlipped1 ? styles.flip : ''}`} onMouseEnter={handleHover1} onMouseLeave={handleHover1}>
          <div className={styles.front}>
            <div className={styles.box1}>
              <p>Front Side</p>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>Back Side</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.col_third}`}>
        <div className={`hover ${styles.panel} ${isFlipped2 ? styles.flip : ''}`} onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
          <div className={styles.front}>
            <div className={styles.box1}>
              <p>Front Side</p>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>Back Side</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.col_third} ${styles.end}`}>
        <div className={`hover ${styles.panel} ${isFlipped3 ? styles.flip : ''}`} onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
          <div className={styles.front}>
            <div className={styles.box1}>
              <p>Front Side</p>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>Back Side</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
