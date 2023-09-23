import Melhor from '../../assets/about/melhor.jpeg'
import { Activities } from './activities'
import styles from './main.module.scss'
export function Main() {
  return (
    <main className={styles.main}>
      <span>Nossa Historia</span>
      <h1>Pesqueiro</h1>
      <div className={styles.box_about}>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dolores pariatur officia, facilis quia enim assumenda illo quam quae
            maiores voluptatum nostrum voluptatibus animi doloribus? Nihil error
            atque libero sed.
          </p>
        </div>
        <div className={styles.pesqueiro}>
          <img src={Melhor} alt="Melhor pesqueiro do ano" />
          <h1>sadsda sdada</h1>
        </div>
      </div>
      <Activities />
    </main>
  )
}
