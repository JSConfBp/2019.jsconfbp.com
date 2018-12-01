import React from 'react'
import { Link } from 'gatsby'
import styles from './ticketbutton.module.scss'

const TicketButton = () => (
    <div className={styles.buy}>
        <a className={styles.ticket} href="https://ti.to/jsconf-bp/jsconf-budapest-2019">
            <div className={styles.inner}>
                <span className={styles.label}>Tickets</span>
            </div>
        </a>
    </div>
)

export default TicketButton
