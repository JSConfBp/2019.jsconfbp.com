import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'

const Navigation = () => (
    <nav className={styles.nav}>
        <ul>
            <li className={styles.item}>
                <Link className={styles.link} to="/budapest-guide">Budapest Guide</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/updates">Updates</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/code-of-conduct">Code of Conduct</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation
