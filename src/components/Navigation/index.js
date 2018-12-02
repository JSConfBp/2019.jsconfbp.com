import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'

// , styles.nav__open

const Navigation = props => {
  const { open } = props

  const className = [styles.nav]

  if (open) {
    className.push(styles.nav__open)
  }

  return (
    <nav className={className.join(' ')}>
      <ul>
        <li className={styles.item}>
          <Link className={styles.link} to="/call-for-speakers">
            Call for Speakers
          </Link>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/sponsoration">
            Sponsoration
          </a>
        </li>
        {/*
            <li className={styles.item}>
              <Link className={styles.link} to="/code-of-conduct">
                News
              </Link>
            </li>      
            <li className={styles.item}>
                <Link className={styles.link} to="/speakers">Speakers</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/venue">Venue</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/sponsors">Sponsors</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/budapest-guide">Budapest Guide</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/updates">Updates</Link>
            </li>
      */}
        <li className={styles.item}>
          <Link className={styles.link} to="/code-of-conduct">
            Code of Conduct
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/code-of-conduct">
            Get Updates
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
