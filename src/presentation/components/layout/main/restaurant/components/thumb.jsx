import styles from './thumb.module.scss'
export function Thumb() {
  return (
    <section className={styles.thumb_container}>
      <div className={styles.image_container}>
        <div className={styles.overlay}></div>
        <div className={styles.image_text}>
          <h1>
            Nossa <span>Lanchonete</span>
          </h1>
          <p>
            Após uma grande sessão de pesca, é ótimo desfrutar de uma refeição
            em um lanchonete local.
          </p>
        </div>
      </div>
    </section>
  )
}
