import { ICON } from 'presentation/components/assets/icons/icon'

import styles from './attractive-box.module.scss'
export function AttractiveBox() {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <a
          href="#sobre-nos
        "
        >
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.GiBoatFishing />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Sobre nós</p>
            </div>
          </div>
        </a>
        <a href="#rodape">
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.BsTelephone />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Contato</p>
            </div>
          </div>
        </a>
        <a href="#fotos">
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.IoMdImages />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Fotos</p>
            </div>
          </div>
        </a>
        <a href="#localizacao">
          {' '}
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.IoLocationOutline />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Localização</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
