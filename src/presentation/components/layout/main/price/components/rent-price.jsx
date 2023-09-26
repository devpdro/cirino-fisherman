import styles from './rent-price.module.scss'

export function RentPrice() {
  return (
    <section className={styles.container}>
      <div className={styles.price_container}>
        <div className={styles.shed}>
          <div className={styles.box_title}>
            <h2>Local para Eventos</h2>
            <p>Perfeito para eventos de casamentos e outros</p>
          </div>
          <div className={styles.box_price}>
            <p className={styles.text_price}>
              A partir de <span> R$ 1.000,00</span>
            </p>
            <p className={styles.text_fees}>em até 5 vezes sem juros!</p>
            <input className={styles.btn} type="button" value="Começar agora" />
            <p className={styles.text_performance}>
              100% Otimizado para ter o melhor desempenho
            </p>
          </div>
          <div className={styles.box_fantasies}>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
          </div>
        </div>
        <div className={styles.shed}>
          <div className={styles.box_title}>
            <h2>Local para Eventos</h2>
            <p>Perfeito para eventos de casamentos e outros</p>
          </div>
          <div className={styles.box_price}>
            <p className={styles.text_price}>
              A partir de <span> R$ 1.000,00</span>
            </p>
            <p className={styles.text_fees}>em até 5 vezes sem juros!</p>
            <input className={styles.btn} type="button" value="Começar agora" />
            <p className={styles.text_performance}>
              100% Otimizado para ter o melhor desempenho
            </p>
          </div>
          <div className={styles.box_fantasies}>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
            <p>Serviços de restaurante</p>
          </div>
        </div>
      </div>
    </section>
  )
}
