import React from 'react'
import { Link } from 'gatsby'
import styles from './ticketbutton.module.scss'

const TicketButton = () => (
    <div className={styles.buy}>
        <Link className={styles.ticket} to="/tickets">
            <div className={styles.inner}>
                <span className={styles.label}>Tickets</span>
            </div>
        </Link>
    </div>
)

export default TicketButton
