import React from 'react'
import { Link } from 'gatsby'
import styles from './banner.module.scss'

const Banner = () => (
  <div className={styles.banner}>
    <div itemscope itemtype="http://schema.org/Event">
      <h3 className={styles.title} itemprop="name">
        JSConf Budapest 2019
      </h3>
      <meta itemprop="startDate" content="2019-09-26" />
      <span className={styles.date}>September 26-27</span>
      <div itemprop="location" itemscope itemtype="http://schema.org/Place">
        <a className={styles.venue} itemprop="url" href="#">
          Akvárium Klub
        </a>
        <div
          itemprop="address"
          itemscope
          itemtype="http://schema.org/PostalAddress"
        >
          <span className={styles.location} itemprop="addressLocality">
            Budapest
          </span>
          ,
          <span className={styles.location} itemprop="addressRegion">
            {' '}
            Hungary
          </span>
        </div>
      </div>
    </div>
    <Link className={styles.ticket} to="/tickets">
      <div className={styles.inner}>
        <span className={styles.label}>Tickets</span>
      </div>
    </Link>
  </div>
)

export default Banner
