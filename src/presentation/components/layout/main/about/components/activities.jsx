import React, { useState } from 'react'

import { ICON } from 'presentation/components/assets/icons/icon'

import styles from './activities.module.scss'

export function Activities() {
  const [isFlipped1, setIsFlipped1] = useState(false)
  const [isFlipped2, setIsFlipped2] = useState(false)
  const [isFlipped3, setIsFlipped3] = useState(false)
  const [isFlipped4, setIsFlipped4] = useState(false)

  const handleHover1 = () => {
    setIsFlipped1(!isFlipped1)
  }

  const handleHover2 = () => {
    setIsFlipped2(!isFlipped2)
  }

  const handleHover3 = () => {
    setIsFlipped3(!isFlipped3)
  }

  const handleHover4 = () => {
    setIsFlipped4(!isFlipped4)
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.col_third}`}>
        <div
          className={`hover ${styles.panel} ${isFlipped1 ? styles.flip : ''}`}
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
        >
          <div className={styles.front}>
            <div className={styles.box1}>
              <div className={styles.box_icon}>
                <ICON.BsArrowCounterclockwise className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>
                A pesca esportiva é uma espécie de pescaria onde você pega um
                grande peixe e tira algumas fotos com ele.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.col_third}`}>
        <div
          className={`hover ${styles.panel} ${isFlipped2 ? styles.flip : ''}`}
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
        >
          <div className={styles.front}>
            <div className={styles.box1}>
              <div>
                <ICON.BsCalendarRange />
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>
                Durante a semana somente pesca agendada para grupos fechados e
                exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.col_third} ${styles.end}`}>
        <div
          className={`hover ${styles.panel} ${isFlipped3 ? styles.flip : ''}`}
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
        >
          <div className={styles.front}>
            <div className={styles.box1}>
              <div>
                <ICON.BsCardChecklist />
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>
                Nessa categoria não cobramos a taxa de entrada, mas o peixe que
                você pegar tem que levar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.col_third} ${styles.end}`}>
        <div
          className={`hover ${styles.panel} ${isFlipped4 ? styles.flip : ''}`}
          onMouseEnter={handleHover4}
          onMouseLeave={handleHover4}
        >
          <div className={styles.front}>
            <div className={styles.box1}>
              <div>
                <ICON.BsCardChecklist />
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>
                Nessa categoria não cobramos a taxa de entrada, mas o peixe que
                você pegar tem que levar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
