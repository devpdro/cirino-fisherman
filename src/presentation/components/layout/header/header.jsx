import styles from "./header.module.scss";

import imgHeader from '../../assets/img-header-oficial.jpg'

export function Header() {
    return (
    <header className={styles.header}>
        <img src={imgHeader} alt="Foto" />
    </header>
  );
}