import React from 'react'
import { Link } from 'gatsby'
import styles from './logo.module.scss'
import LogoImage from './image'

const Logo = () => (
  <Link className={styles.logo} to="/">
    <LogoImage className={styles.inner} />
  </Link>
)

export default Logo
