import { About } from './about/about'
import styles from './main.module.scss'
import { Restaurant } from './restaurant/restaurant'
export function Main() {
  return (
    <main className={styles.main}>
      <About />
      <Restaurant />
    </main>
  )
}
