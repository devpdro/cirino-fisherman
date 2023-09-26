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
    <section className={styles.wrapper}>
      <div className={`${styles.col_third}`}>
        <div
          className={`hover ${styles.panel} ${isFlipped1 ? styles.flip : ''}`}
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
        >
          <div className={styles.front}>
            <div className={styles.box1}>
              <div className={styles.box_icon}>
                <ICON.BsPencilSquare className={styles.icon} />
                <h2>Dicas</h2>
                <p>Três dicas para quem gosta dessa modalidade.</p>
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>1 - Saiba quais as melhores iscas.</p>
              <p>2 - Treine, pois a prática leva à perfeição.</p>
              <p>3 - Saiba fazer os nós básicos.</p>
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
              <div className={styles.box_icon}>
                <ICON.FaBan className={styles.icon} />
                <h2>Proibido</h2>
                <p>Três coisas proibidas para se fazer no pesqueiro.</p>
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>1 - Uso de anzol com fisga.</p>
              <p>2 - Jogar lixo ou resto de iscas na água.</p>
              <p>3 - Uso de linha multifilamento.</p>
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
              <div className={styles.box_icon}>
                <ICON.FaDollarSign className={styles.icon} />
                <h2>Preço</h2>
                <p>
                  Pesca a KG, nessa categoria não cobramos a taxa de entrada.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>
                Mas o peixe que você pegar tem que pagar, temos Pacu, Tambaqui
                Dourado, Pintado, Tilapia e Carpa.
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
              <div className={styles.box_icon}>
                <ICON.IoLocationSharp className={styles.icon} />
                <h2>Localização</h2>
                <p>
                  Estamos ansiosos para recebê-lo no nosso incrível endereço!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.box2}>
              <p>
                Endereço: Rodovia SP-191 - Km 199 <br /> Número: Km 199 <br />
                Cidade: São Pedro - SP <br /> CEP: 13520-000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
