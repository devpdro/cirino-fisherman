import styles from './footer.module.scss'
export function Footer() {
  return (
    <section id="rodape" className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.box}>
          <div className={styles.copyright}>
            <h1>©2023 PESQUEIRO DO CIRINO.</h1>
            <p>Todos os direitos resevados.</p>
          </div>
          <div className={styles.developer}>
            <p>
              ©{' '}
              <a
                href="https://mattedev.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Matte
              </a>
              . Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
