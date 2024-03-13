import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

import Logo from 'presentation/components/assets/soon/logo.webp'
import { useWindowSize } from 'presentation/hooks/use-window-size'

import styles from './navbar.module.scss'

export function Navbar() {
  const { width: screenWidth } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerHeight = 750

  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (
          prevScrollPos > currentScrollPos ||
          currentScrollPos < headerHeight
        ) {
          navbar.style.top = '0'
        } else {
          navbar.style.top = '-140px'
        }
      }
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerHeight])

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }

  return (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.header__content}>
        <div className={styles.box_logo}>
          <a href="#pesqueiro">
            <img className={styles.img_logo_logo} src={Logo} alt="Logo" />
          </a>
        </div>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth < 1280 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <Link
                activeClass="active"
                to="pesqueiro"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Pesqueiro
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="sobre-nos"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="fotos"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Fotos
              </Link>
            </li>
            <div className={styles.div_logo}>
              <Link
                activeClass="active"
                to="sobre-nos"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                <img className={styles.img_logo} src={Logo} alt="Logo" />
              </Link>
            </div>
            <li>
              <Link
                activeClass="active"
                to="preco"
                spy={true}
                smooth={true}
                className={`${styles.link}`}
                onClick={menuToggleHandler}
              >
                Preço
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="localizacao"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Localização
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="rodape"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Contato
              </Link>
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
