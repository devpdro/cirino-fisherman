import { CarouselImages } from './carousel-images/carousel-images'
import styles from './header.module.scss'
import { Navbar } from './navbar/navbar'

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <CarouselImages />
    </header>
  )
}
