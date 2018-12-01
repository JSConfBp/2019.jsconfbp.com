import React from 'react'

import styles from './header.module.scss'

const Header = () => (
  <div className={styles.sponsor_header}>
    <div className={styles.block_inner}>

      <h1 className={styles.title}>
        <span className={styles.jsconf} />
        <span className={styles.cssconf} />
        JSConf Budapest & CSSConf Budapest
        <br />
        2019 Sponsoration
      </h1>

    </div>
  </div>
)

export default Header
