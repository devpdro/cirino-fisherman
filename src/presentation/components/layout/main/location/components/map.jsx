import styles from './map.module.scss'

export function Map() {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7368.836467767373!2d-47.911055995860764!3d-22.563455752009133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7b0175093753b%3A0x7269a4f04a1bb547!2sPesque%20%26%20Pague%20Cirino!5e0!3m2!1spt-BR!2sbr!4v1695837417786!5m2!1spt-BR!2sbr"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
