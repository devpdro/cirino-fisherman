import styles from './footer.module.scss'
export function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.box}>
          <div className={styles.copyright}>
            <h1>©2023 PESQUEIRO DO CIRINO.</h1>
            <p>Todos os direitos resevados.</p>
          </div>
          <div className={styles.developer}>
            Desenvolvido por: <span>CONFIDENCIAL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
