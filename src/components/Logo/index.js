import React from 'react'
import { Link } from 'gatsby'
import styles from './logo.module.scss'
import logoImage from '../../images/logo2.png'

const Logo = () => (
  <Link className={styles.logo} to="/">
    <img className={styles.inner} src={logoImage} alt="" />
  </Link>
)

export default Logo
