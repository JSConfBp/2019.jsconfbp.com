import React from 'react'
import { Link } from 'gatsby'

import styles from './navigation.module.scss'

const Navigation = () => (
  <nav className={styles.navigation}>
    <nav className={styles.navigation_wrapper}>
      <ul className={styles.navigation_wrapper_list}>
        <li className={styles.navigation_wrapper_list_item}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navigation_wrapper_list_item}>
          <Link to="/code-of-conduct">Code Of Conduct</Link>
        </li>
        <li className={styles.navigation_wrapper_list_item}>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  </nav>
)

export default Navigation
