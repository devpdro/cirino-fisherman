import { About } from './about/about'
import { Gallery } from './gallery/gallery'
import { Location } from './location/location'
import styles from './main.module.scss'
import { Price } from './price/price'
import { Restaurant } from './restaurant/restaurant'
export function Main() {
  return (
    <main className={styles.main}>
      <About />
      <Restaurant />
      <Price />
      <Gallery />
      <Location />
    </main>
  )
}
