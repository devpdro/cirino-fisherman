import Better from 'presentation/components/assets/about/better.jpeg'

import styles from './about.module.scss'
import { Activities } from './components/activities'
export function About() {
  return (
    <main id="#sobre-nos" className={styles.main}>
      <span className={styles.subtitle}>Nossa história</span>
      <h1 className={styles.title}>Conheça</h1>
      <div className={styles.box_about}>
        <div className={styles.about}>
          <h4>Aurea Benedito Cirino</h4>
          <h1>Fundou o Pesqueiro do Cirino</h1>
          <p>
            Inaugurado em 1995, o Pesqueiro Cirino, localizado na região de São
            Pedro, foi pioneiro em oferecer uma modalidade de lazer cada vez
            mais popular no interior do Estado. Ele atrai principalmente aqueles
            que buscam escapar do estresse cotidiano. Além de apreciar a beleza
            natural ao redor, nossos pescadores desfrutam da emocionante pesca
            de peixes nobres, como Pacus, Tambaquis, Dourados, Pintados,
            Tilápias e Carpas, que proporcionam experiências inesquecíveis.
          </p>
        </div>
        <div className={styles.pesqueiro}>
          <img src={Better} alt="Melhor pesqueiro do ano" />
        </div>
      </div>
      <Activities />
    </main>
  )
}
