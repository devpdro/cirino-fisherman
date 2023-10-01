import { ICON } from 'presentation/components/assets/icons/icon'

import { LocationThumb } from './components/location-thumb'
import { Map } from './components/map'
import styles from './location.module.scss'
export function Location() {
  return (
    <section id="localizacao">
      <LocationThumb title="Localização" subtitle="Venha nos visitar!" />
      <div className={styles.container}>
        <span className={styles.subtitle}>Nossa localização</span>
        <h1 className={styles.title}>Localização</h1>
        <div className={styles.box_location}>
          <div className={styles.map}>
            <Map />
          </div>
          <div className={styles.box_contact}>
            <div className={styles.contact}>
              <h3>Horário</h3>
              <div>
                <span>
                  <ICON.BiTime className={styles.icon} />
                </span>
                <p>Quarta-feira a Domingo e Feriados: 8h às 18horas</p>
              </div>
            </div>
            <div className={styles.time}>
              <h3>Contato</h3>
              <div>
                <span>
                  <ICON.IoLocationOutline className={styles.icon} />
                </span>
                <p>Pesque & Pague Cirino, São Pedro - SP, 13520-000</p>
              </div>
              <div>
                <span>
                  <ICON.BiLogoWhatsapp className={styles.icon} />
                </span>
                <p>+55 19 99771-5391</p>
              </div>
              <div>
                <span>
                  <ICON.AiOutlineInstagram className={styles.icon} />
                </span>
                <a href="https://www.instagram.com/pesqueirocirino/?igshid=NzZlODBkYWE4Ng%3D%3D">
                  <p>pesqueirocirino</p>
                </a>
              </div>
              <div>
                <span>
                  <ICON.AiOutlineFacebook className={styles.icon} />
                </span>
                <a href="https://www.facebook.com/pesqueirocpesqueirocirino?mibextid=ZbWKwL-5391">
                  Pesqueiro Cirino
                </a>
              </div>
              <div>
                <span>
                  <ICON.AiOutlineFacebook className={styles.icon} />
                </span>
                <a href="https://www.facebook.com/pesqueirodocirino?mibextid=ZbWKwL">
                  Pesqueiro Do Cirino
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
