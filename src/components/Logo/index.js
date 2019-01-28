import React from 'react'
import { Link } from 'gatsby'
import styles from './logo.module.scss'
import LogoImage from './image'

const Logo = ({ menuOpen }) => (
  <Link
    className={[styles.logo, menuOpen ? styles.logo_menu_open : ''].join(' ')}
    to="/"
  >
    <LogoImage className={styles.inner} />
  </Link>
)

export default Logo
