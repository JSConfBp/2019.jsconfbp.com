import React from 'react'
import { Link } from 'gatsby'
import styles from './ticketbutton.module.scss'

const TicketButton = () => (
    <div className={styles.buy}>
        <span className={styles.date}>2019 September 26-27</span>
        <Link className={styles.ticket} to="/tickets">
            <div className={styles.inner}>
                <span className={styles.label}>Tickets</span>
            </div>
        </Link>
    </div>
)

export default TicketButton
