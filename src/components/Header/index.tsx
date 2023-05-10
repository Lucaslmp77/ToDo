import logo from '../../assets/logo.svg'

import styles from './style.module.css'


export const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles.img} src={logo} alt="logo principal do sistema" />
    </header>
  )
}