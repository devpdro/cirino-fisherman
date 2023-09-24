import { ICON } from 'presentation/components/assets/icons/icon'

import styles from './attractive-box.module.scss'
export function AttractiveBox() {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <ICON.GiBoatFishing />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>Sobre nós</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <ICON.BiRestaurant />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>Lanchonete</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <ICON.IoMdImages />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>Fotos</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <ICON.IoLocationOutline />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>Localização</p>
          </div>
        </div>
      </div>
    </section>
  )
}
