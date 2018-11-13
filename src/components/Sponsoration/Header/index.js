import React from 'react'

import styles from './header.module.scss'


const Header = () => (
  <>

    <h1 className={styles.title}>
      <span className={styles.jsconf}></span>
      <span className={styles.cssconf}></span>
      JSConf Budapest & CSSConf Budapest
      <br />
      2019 Sponsoration
    </h1>
  </>
)

export default Header
