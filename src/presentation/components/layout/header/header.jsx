import styles from './header.module.scss'
import { Images } from './images'
import { Navbar } from './navbar'

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <Images />
    </header>
  )
}
