import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import Logo from 'presentation/components/assets/soon/logo.png'
import { useWindowSize } from 'presentation/hooks/use-window-size'

import styles from './navbar.module.scss'

export function Navbar() {
  const { width: screenWidth } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.header__content}>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth < 768 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <a
                className={styles.link}
                href="#pesqueiro"
                onClick={menuToggleHandler}
              >
                Pesqueiro
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#sobre-nos"
                onClick={menuToggleHandler}
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#lanchonete"
                onClick={menuToggleHandler}
              >
                Lanchonete
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#sobre-nos"
                onClick={menuToggleHandler}
              >
                <img className={styles.img_logo} src={Logo} alt="Logo" />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#preco"
                onClick={menuToggleHandler}
              >
                Preço
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#fotos"
                onClick={menuToggleHandler}
              >
                Fotos
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#localizacao"
                onClick={menuToggleHandler}
              >
                Localização
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <AiOutlineMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </nav>
  )
}
