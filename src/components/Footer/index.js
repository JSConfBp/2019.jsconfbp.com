import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.scss'

const Footer = () => (
  <div>
    <p className={styles.text}>
      JSConf Budapest welcomes everybody, please{' '}
      <em className={styles.emphasize}>be nice to each other</em>.
    </p>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.link} to="/about">
          About
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="/code-of-conduct">
          Code Of Conduct
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="/privacy-policy">
          Privacy Policy
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="/impressum">
          Impressum
        </Link>
      </li>
    </ul>
  </div>
)

export default Footer
