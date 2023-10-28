import { Link } from 'react-scroll'

import { ICON } from 'presentation/components/assets/icons/icon'

import styles from './attractive-box.module.scss'
export function AttractiveBox() {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <Link activeClass="active" to="sobre-nos" spy={true} smooth={true}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.GiBoatFishing />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Sobre nós</p>
            </div>
          </div>
        </Link>
        <Link activeClass="active" to="rodape" spy={true} smooth={true}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.BsTelephone />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Contato</p>
            </div>
          </div>
        </Link>
        <Link activeClass="active" to="fotos" spy={true} smooth={true}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.IoMdImages />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Fotos</p>
            </div>
          </div>
        </Link>
        <Link activeClass="active" to="localizacao" spy={true} smooth={true}>
          {' '}
          <div className={styles.box}>
            <div className={styles.icon}>
              <ICON.IoLocationOutline />
            </div>
            <div className={styles.text}>
              <p className={styles.paragraph}>Localização</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
