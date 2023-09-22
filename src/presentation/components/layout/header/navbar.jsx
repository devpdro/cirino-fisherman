import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./navbar.module.scss";

import Logo from "../../assets/logo/logo.png"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.header__content}>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a
                className={styles.link}
                href="#header"
                onClick={menuToggleHandler}
              >
                Quem somos
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#about"
                onClick={menuToggleHandler}
              >
                Cárdapio
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#skills"
                onClick={menuToggleHandler}
              >
                Endereços
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#projects"
                onClick={menuToggleHandler}
              >
                <img className={styles.img_logo} src={Logo} alt="Logo" />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#projects"
                onClick={menuToggleHandler}
              >
                Endereço
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#projects"
                onClick={menuToggleHandler}
              >
                Insta
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#contact"
                onClick={menuToggleHandler}
              >
                Contato
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
  );
};