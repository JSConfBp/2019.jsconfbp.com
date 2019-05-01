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

      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><a href="#packages">Packages</a></li>
          <li className={styles.nav_item}><a href="#perks">Perks</a></li>
          <li className={styles.nav_item}><a href="#workshops">Workshops</a></li>
          <li className={styles.nav_item}><a href="#reach">Our Reach</a></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
